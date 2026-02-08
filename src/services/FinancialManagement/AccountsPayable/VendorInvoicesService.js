const { query } = require('../../../db');
const { v4: uuidv4 } = require('uuid');

class VendorInvoicesService {
    async matchPO(invoiceId, poId, organizationId) {
        // Simple mock matching logic - in real app would check line items
        // Here we just link them and update status
        const sql = `
            UPDATE vendor_invoices 
            SET purchase_order_id = ?, status = 'matched', processing_step = 'matched'
            WHERE id = ? AND organization_id = ?
        `;
        await query(sql, [poId, invoiceId, organizationId]);
        return { message: "Invoice matched to PO successfully" };
    }

    async createPaymentBatch(invoiceIds, organizationId) {
        // Mock batch creation
        const batchId = uuidv4();
        // In real app, would create a batch record and link invoices
        // For now, just update status of invoices
        if (!invoiceIds || invoiceIds.length === 0) return { message: "No invoices selected" };

        const placeholders = invoiceIds.map(() => '?').join(',');
        const sql = `
            UPDATE vendor_invoices 
            SET payment_batch_id = ?, status = 'payment_processing', processing_step = 'in_batch'
            WHERE id IN (${placeholders}) AND organization_id = ?
        `;

        await query(sql, [...invoiceIds, batchId, organizationId]);
        return { batchId, message: "Payment batch created", count: invoiceIds.length };
    }

    async markAsPaid(invoiceId, organizationId) {
        const sql = `
            UPDATE vendor_invoices 
            SET status = 'paid', processing_step = 'paid', payment_date = NOW()
            WHERE id = ? AND organization_id = ?
        `;
        await query(sql, [invoiceId, organizationId]);
        return { message: "Invoice marked as paid" };
    }
}

module.exports = new VendorInvoicesService();
