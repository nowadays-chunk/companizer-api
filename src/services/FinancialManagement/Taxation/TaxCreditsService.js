const { query } = require('../../../db');

class TaxCreditsService {
    async calculateCredit(type, expenses, organizationId) {
        // Mock calculation logic (e.g. R&D credit)
        const rate = type === 'RD' ? 0.20 : 0.10;
        const creditAmount = expenses * rate;

        return { type, expenses, creditAmount, message: "Credit calculated" };
    }

    async applyCredit(creditId, filingId, organizationId) {
        // Mark credit as used
        const sql = `UPDATE tax_credits SET status = 'applied', applied_to_filing_id = ? WHERE id = ? AND organization_id = ?`;
        try {
            await query(sql, [filingId, creditId, organizationId]);
        } catch (e) {
            console.warn("Credit application simulation", e);
        }
        return { message: "Tax credit applied to filing" };
    }
}

module.exports = new TaxCreditsService();
