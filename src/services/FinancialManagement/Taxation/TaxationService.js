const { query } = require('../../../db');

class TaxationService {
    async getFilings(organizationId) {
        return await query('SELECT * FROM tax_filings WHERE organization_id = ? ORDER BY due_date DESC', [organizationId]);
    }

    async createFiling(data, organizationId) {
        const { tax_type, period, due_date, status, amount_due } = data;
        const sql = `INSERT INTO tax_filings (organization_id, tax_type, period, due_date, status, amount_due) VALUES (?, ?, ?, ?, ?, ?)`;
        const result = await query(sql, [organizationId, tax_type, period, due_date, status || 'pending', amount_due || 0]);
        return { id: result.insertId, ...data };
    }
}

module.exports = new TaxationService();
