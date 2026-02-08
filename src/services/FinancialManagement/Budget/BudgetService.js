const { query } = require('../../../db');

class BudgetService {
    async getAll(organizationId) {
        return await query('SELECT * FROM budgets WHERE organization_id = ? ORDER BY fiscal_year DESC', [organizationId]);
    }

    async create(data, organizationId) {
        const { name, fiscal_year, total_amount, status } = data;
        const sql = `INSERT INTO budgets (organization_id, name, fiscal_year, total_amount, status) VALUES (?, ?, ?, ?, ?)`;
        const result = await query(sql, [organizationId, name, fiscal_year, total_amount, status || 'draft']);
        return { id: result.insertId, ...data };
    }

    async getItems(budgetId) {
        return await query('SELECT * FROM budget_items WHERE budget_id = ?', [budgetId]);
    }

    async addItem(budgetId, data) {
        const { category, allocated_amount } = data;
        const sql = `INSERT INTO budget_items (budget_id, category, allocated_amount, spent_amount) VALUES (?, ?, ?, 0)`;
        const result = await query(sql, [budgetId, category, allocated_amount]);
        return { id: result.insertId, ...data };
    }
}

module.exports = new BudgetService();
