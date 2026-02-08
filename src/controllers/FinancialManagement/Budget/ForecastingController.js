const ForecastingService = require('../../../services/FinancialManagement/Budget/ForecastingService');

class ForecastingController {
    async generateForecast(req, res) {
        try {
            const { period, baseData } = req.body;
            const result = await ForecastingService.generateForecast(period, baseData, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ForecastingController.generateForecast:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async saveScenario(req, res) {
        try {
            const { name, data } = req.body;
            if (!name) return res.status(400).json({ message: "Scenario Name required" });

            const result = await ForecastingService.saveScenario(name, data, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ForecastingController.saveScenario:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new ForecastingController();
