const { query } = require('../../../db');

class AccountsReceivableService {
    async getInvoices(organizationId) {
        return await query('SELECT * FROM ar_invoices WHERE organization_id = ? ORDER BY created_at DESC', [organizationId]);
    }

    async createInvoice(data, organizationId) {
        const { invoice_number, customer_id, customer_name, invoice_date, due_date, total_amount } = data;
        const sql = `
            INSERT INTO ar_invoices (organization_id, invoice_number, customer_id, customer_name, invoice_date, due_date, total_amount, balance_due, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'draft')
        `;
        const result = await query(sql, [organizationId, invoice_number, customer_id, customer_name, invoice_date, due_date, total_amount, total_amount]);
        return { id: result.insertId, ...data };
    }

    async getCreditLimit(customerId, organizationId) {
        const rows = await query('SELECT * FROM credit_management WHERE customer_id = ? AND organization_id = ?', [customerId, organizationId]);
        return rows[0];
    }
}

module.exports = new AccountsReceivableService();
