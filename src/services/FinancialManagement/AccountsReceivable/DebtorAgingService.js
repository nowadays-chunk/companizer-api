const { query } = require('../../../db');

class DebtorAgingService {
    async flagBadDebt(customerId, organizationId) {
        // Update customer status or create a bad debt record
        const sql = `UPDATE customers SET credit_status = 'bad_debt_warning' WHERE id = ? AND organization_id = ?`;

        try {
            await query(sql, [customerId, organizationId]);
        } catch (e) {
            console.warn("Could not update customers table", e);
        }

        return { message: "Customer flagged for bad debt review" };
    }
}

module.exports = new DebtorAgingService();
