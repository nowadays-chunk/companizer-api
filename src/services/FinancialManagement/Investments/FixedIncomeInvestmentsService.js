const { query } = require('../../../db');

class FixedIncomeInvestmentsService {
    async calculateAccruedInterest(investmentId, organizationId) {
        // Mock API
        const rate = 0.04;
        const daysHeld = 90;
        const principal = 10000;
        const accrued = principal * rate * (daysHeld / 365);

        return {
            investmentId,
            accruedInterest: accrued.toFixed(2),
            currency: 'USD',
            details: `Calculated for ${daysHeld} days at ${(rate * 100)}%`
        };
    }
}

module.exports = new FixedIncomeInvestmentsService();
