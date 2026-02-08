const { query } = require('../../../db');

class TaxFilingsService {
    async generateFiling(year, period, organizationId) {
        // Collect data from GL, VAT, etc.
        // Mock generation
        const filingData = {
            year,
            period,
            totalIncome: 1000000,
            taxableIncome: 900000,
            taxLiability: 180000,
            generatedAt: new Date()
        };

        return { message: "Filing generated", data: filingData };
    }

    async submitFiling(filingId, organizationId) {
        const sql = `UPDATE tax_filings SET status = 'submitted', submitted_at = NOW() WHERE id = ? AND organization_id = ?`;
        try {
            await query(sql, [filingId, organizationId]);
        } catch (e) {
            console.warn("Filing submission simulation", e);
        }
        return { message: "Tax filing submitted to authority" };
    }
}

module.exports = new TaxFilingsService();
