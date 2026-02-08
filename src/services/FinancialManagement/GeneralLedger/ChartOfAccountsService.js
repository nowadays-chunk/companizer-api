const { query } = require('../../../db');

class ChartOfAccountsService {
    async validateStructure(organizationId) {
        // Logic to check if all accounts have valid types and parents
        // Mock check
        const sql = `SELECT COUNT(*) as count FROM chart_of_accounts WHERE account_type IS NULL AND organization_id = ?`;
        const result = await query(sql, [organizationId]);
        const isValid = result[0].count === 0;

        return {
            message: isValid ? "Chart of Accounts structure is valid" : "Invalid accounts found",
            isValid
        };
    }
}

module.exports = new ChartOfAccountsService();
