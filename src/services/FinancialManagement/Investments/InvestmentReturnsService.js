const { query } = require('../../../db');

class InvestmentReturnsService {
    async calculateROI(investmentId, organizationId) {
        // Mock ROI
        const initial = 10000;
        const current = 12500;
        const roi = ((current - initial) / initial) * 100;

        return {
            investmentId,
            roiPercentage: roi.toFixed(2) + '%',
            profit: current - initial
        };
    }
}

module.exports = new InvestmentReturnsService();
