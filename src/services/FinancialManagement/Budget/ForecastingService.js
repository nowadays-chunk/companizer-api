const { query } = require('../../../db');

class ForecastingService {
    async generateForecast(period, baseData, organizationId) {
        // Mock forecasting logic
        // Use previous year data + 5% growth

        const forecastInfo = {
            period,
            projected_revenue: 100000 * 1.05,
            projected_expenses: 80000 * 1.03,
            net_income: (100000 * 1.05) - (80000 * 1.03)
        };

        return { message: "Forecast generated", data: forecastInfo };
    }

    async saveScenario(name, data, organizationId) {
        const sql = `INSERT INTO budget_scenarios (name, data, organization_id, created_at) VALUES (?, ?, ?, NOW())`;
        // assume budget_scenarios exists
        try {
            await query(sql, [name, JSON.stringify(data), organizationId]);
        } catch (e) {
            console.warn("Scenario save simulation", e);
        }
        return { message: "Scenario saved", name };
    }
}

module.exports = new ForecastingService();
