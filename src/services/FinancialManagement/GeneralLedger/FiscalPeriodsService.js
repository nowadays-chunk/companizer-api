const { query } = require('../../../db');

class FiscalPeriodsService {
    async closePeriod(periodId, organizationId) {
        const sql = `UPDATE fiscal_periods SET status = 'closed', closed_at = NOW() WHERE id = ? AND organization_id = ?`;
        await query(sql, [periodId, organizationId]);
        return { message: "Fiscal period closed successfully" };
    }

    async openPeriod(periodId, organizationId) {
        const sql = `UPDATE fiscal_periods SET status = 'open', closed_at = NULL WHERE id = ? AND organization_id = ?`;
        await query(sql, [periodId, organizationId]);
        return { message: "Fiscal period re-opened" };
    }
}

module.exports = new FiscalPeriodsService();
