const { query } = require('../../../db');

class VarianceAnalysisService {
    async calculateVariance(period, departmentId, organizationId) {
        // Compare Budget vs Actuals
        // Mock query
        const budget = 10000;
        const actual = 12000;
        const variance = actual - budget;
        const percentage = (variance / budget) * 100;

        return {
            period,
            departmentId,
            budget,
            actual,
            variance,
            percentage: percentage.toFixed(2) + '%',
            status: variance > 0 ? 'Over Budget' : 'Under Budget'
        };
    }
}

module.exports = new VarianceAnalysisService();
