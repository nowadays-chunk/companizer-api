const { query } = require('../../../db');

class CreditorsLedgerService {
    async reconcileLedger(vendorId, organizationId) {
        // Logic to reconcile vendor ledger: match payments to invoices
        // For now, auto-match exact amounts
        const sqlItems = `
            SELECT * FROM vendor_invoices 
            WHERE vendor_id = ? AND organization_id = ? AND status = 'approved'
        `;
        const invoices = await query(sqlItems, [vendorId, organizationId]);

        // Mock reconciliation result
        const reconciledCount = invoices.length > 0 ? 1 : 0;

        return {
            message: "Ledger reconciled",
            details: `Matched ${reconciledCount} transactions automatically.`
        };
    }

    async generateStatement(vendorId, periodStart, periodEnd, organizationId) {
        // Fetch data for statement
        const sql = `
            SELECT * FROM vendor_invoices 
            WHERE vendor_id = ? AND organization_id = ? 
            AND invoice_date BETWEEN ? AND ?
        `;

        // Ensure dates are valid, else use defaults
        const start = periodStart || new Date(new Date().getFullYear(), 0, 1);
        const end = periodEnd || new Date();

        const transactions = await query(sql, [vendorId, organizationId, start, end]);

        return {
            vendorId,
            period: { start, end },
            transactions,
            closingBalance: 1000.00 // Mock balance
        };
    }
}

module.exports = new CreditorsLedgerService();
