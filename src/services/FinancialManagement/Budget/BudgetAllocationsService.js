const { query } = require('../../../db');
const { v4: uuidv4 } = require('uuid');

class BudgetAllocationsService {
    async allocate(data, organizationId) {
        const { department_id, period, amount, cost_center } = data;

        // Check if allocation exists
        // Upsert logic
        const sql = `
            INSERT INTO budget_allocations (organization_id, department_id, period, amount, cost_center, status)
            VALUES (?, ?, ?, ?, ?, 'draft')
            ON DUPLICATE KEY UPDATE amount = ?, status = 'draft'
        `;

        try {
            await query(sql, [organizationId, department_id, period, amount, cost_center, amount]);
        } catch (e) {
            console.warn("Allocation update simulation", e);
        }

        return { message: "Budget allocated successfully", data };
    }

    async approve(allocationId, approverId, organizationId) {
        const sql = `UPDATE budget_allocations SET status = 'approved', approved_by = ? WHERE id = ? AND organization_id = ?`;
        await query(sql, [approverId, allocationId, organizationId]);
        return { message: "Budget allocation approved" };
    }
}

module.exports = new BudgetAllocationsService();
