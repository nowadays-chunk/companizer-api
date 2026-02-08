const CashFlowForecastsService = require('../../../services/FinancialManagement/TreasuryManagement/CashFlowForecastsService');

class CashFlowForecastsController {
    async generateForecast(req, res) {
        try {
            const { period } = req.body;
            const result = await CashFlowForecastsService.generateForecast(period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CashFlowForecastsController.generateForecast:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new CashFlowForecastsController();
