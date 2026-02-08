const { query } = require('../../../db');

class PaymentRunsService {
    async getAllBatches(organizationId) {
        return await query('SELECT * FROM payment_batches WHERE organization_id = ? ORDER BY created_at DESC', [organizationId]);
    }

    async getBatchById(id, organizationId) {
        const batches = await query('SELECT * FROM payment_batches WHERE id = ? AND organization_id = ?', [id, organizationId]);
        if (!batches.length) return null;

        const payments = await query('SELECT * FROM payments WHERE payment_batch_id = ?', [id]);
        return { ...batches[0], payments };
    }

    async createBatch(data, organizationId) {
        const { batch_number, payment_method, currency } = data;

        const result = await query(
            'INSERT INTO payment_batches (organization_id, batch_number, payment_method, currency, status) VALUES (?, ?, ?, ?, ?)',
            [organizationId, batch_number, payment_method, currency || 'USD', 'draft']
        );

        return this.getBatchById(result.insertId, organizationId);
    }

    async addPaymentToBatch(batchId, data, organizationId) {
        const { invoice_id, amount, payment_date } = data;

        // Verify batch ownership
        const batch = await this.getBatchById(batchId, organizationId);
        if (!batch) throw new Error("Batch not found");
        if (batch.status !== 'draft') throw new Error("Cannot add to processed batch");

        const result = await query(
            'INSERT INTO payments (organization_id, payment_batch_id, invoice_id, amount, payment_date, status) VALUES (?, ?, ?, ?, ?, ?)',
            [organizationId, batchId, invoice_id, amount, payment_date, 'pending']
        );

        // Update batch total
        await query(
            'UPDATE payment_batches SET total_amount = total_amount + ? WHERE id = ?',
            [amount, batchId]
        );

        return result.insertId;
    }

    async processBatch(batchId, organizationId) {
        const batch = await this.getBatchById(batchId, organizationId);
        if (!batch) throw new Error("Batch not found");
        if (batch.status !== 'draft') throw new Error("Batch already processed");

        // Start transaction (mocked by sequential updates for now)

        // 1. Update batch status
        await query(
            'UPDATE payment_batches SET status = ?, processed_date = NOW() WHERE id = ?',
            ['processed', batchId]
        );

        // 2. Update payments status
        await query(
            'UPDATE payments SET status = ? WHERE payment_batch_id = ?',
            ['cleared', batchId]
        );

        // 3. Update invoices (this would ideally be done via InvoiceService to keep logic encapsulated, but doing direct SQL for speed here)
        // Mark matched invoices as paid
        const payments = await query('SELECT invoice_id FROM payments WHERE payment_batch_id = ?', [batchId]);
        for (const payment of payments) {
            if (payment.invoice_id) {
                await query(
                    'UPDATE vendor_invoices SET status = ?, processing_step = ? WHERE id = ? AND organization_id = ?',
                    ['paid', 'paid', payment.invoice_id, organizationId]
                );
            }
        }

        return this.getBatchById(batchId, organizationId);
    }
}

module.exports = new PaymentRunsService();
