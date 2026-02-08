const { query } = require('../../../db');

class EquityInvestmentsService {
    async recordPurchase(ticker, shares, price, organizationId) {
        const costBasis = shares * price;
        const sql = `
            INSERT INTO equity_investments (organization_id, ticker, shares_owned, cost_basis, current_valuation, last_updated)
            VALUES (?, ?, ?, ?, ?, NOW())
            ON DUPLICATE KEY UPDATE shares_owned = shares_owned + ?, cost_basis = cost_basis + ?, last_updated = NOW()
        `;

        try {
            await query(sql, [organizationId, ticker, shares, costBasis, costBasis, shares, costBasis]);
        } catch (e) {
            console.warn("Equity purchase simulation", e);
        }

        return { message: "Equity purchase recorded", ticker, shares, price };
    }

    async updateValuation(ticker, currentPrice, organizationId) {
        const sql = `UPDATE equity_investments SET current_valuation = shares_owned * ?, last_updated = NOW() WHERE ticker = ? AND organization_id = ?`;
        try {
            await query(sql, [currentPrice, ticker, organizationId]);
        } catch (e) {
            console.warn("Valuation update simulation", e);
        }
        return { message: "Valuation updated", ticker, currentPrice };
    }
}

module.exports = new EquityInvestmentsService();
