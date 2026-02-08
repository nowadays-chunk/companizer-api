const PurchaseOrdersService = require('../src/services/FinancialManagement/AccountsPayable/PurchaseOrdersService');
const PaymentRunsService = require('../src/services/FinancialManagement/AccountsPayable/PaymentRunsService');
const { pool } = require('../src/db');

async function testImplementation() {
    const orgId = 'test-org-123';
    const vendorId = 'test-vendor-456';

    try {
        console.log("Starting Verification...");

        // 1. Test Purchase Orders
        console.log("1. Testing Purchase Orders...");
        const poData = {
            vendor_id: vendorId,
            po_number: 'PO-TEST-001',
            order_date: new Date(),
            total_amount: 1000.00,
            items: [
                { description: 'Test Item 1', quantity: 10, unit_price: 50.00, total_price: 500.00, sku: 'SKU-001' },
                { description: 'Test Item 2', quantity: 5, unit_price: 100.00, total_price: 500.00, sku: 'SKU-002' }
            ]
        };
        const po = await PurchaseOrdersService.create(poData, orgId);
        console.log("Created PO:", po.po_number, "ID:", po.id);

        if (parseFloat(po.total_amount) !== 1000.00) throw new Error(`PO Total Mismatch: Got ${po.total_amount}`);
        if (po.items.length !== 2) throw new Error("PO Items Mismatch");

        // 2. Test Payment Batches
        console.log("2. Testing Payment Batches...");
        const batchData = {
            batch_number: 'BATCH-TEST-001',
            payment_method: 'ACH',
            currency: 'USD'
        };
        const batch = await PaymentRunsService.createBatch(batchData, orgId);
        console.log("Created Batch:", batch.batch_number, "ID:", batch.id);

        if (batch.status !== 'draft') throw new Error("Batch status should be draft");

        // 3. Test Adding Payment
        console.log("3. Testing Adding Payment to Batch...");
        // Need a fake invoice ID, but for now we trust the service doesn't check FK constraint if we don't enforce it strictly in DB (or we create one)
        // Actually, we likely have FK constraints.
        // Let's Insert a fake invoice first manually to be safe.
        const [invResult] = await pool.query(
            'INSERT INTO vendor_invoices (organization_id, invoice_number, total_amount) VALUES (?, ?, ?)',
            [orgId, 'INV-TEST-001', 500.00]
        );
        const invoiceId = invResult.insertId;

        await PaymentRunsService.addPaymentToBatch(batch.id, {
            invoice_id: invoiceId,
            amount: 500.00,
            payment_date: new Date()
        }, orgId);
        console.log("Added payment to batch.");

        const updatedBatch = await PaymentRunsService.getBatchById(batch.id, orgId);
        console.log("Updated Batch Total:", updatedBatch.total_amount);

        if (parseFloat(updatedBatch.total_amount) !== 500.00) throw new Error(`Batch Total Mismatch: Got ${updatedBatch.total_amount}`);
        if (updatedBatch.payments.length !== 1) throw new Error("Batch Payments Count Mismatch");

        console.log("VERIFICATION SUCCESSFUL!");

    } catch (error) {
        console.error("VERIFICATION FAILED:", error);
    } finally {
        pool.end();
    }
}

testImplementation();
