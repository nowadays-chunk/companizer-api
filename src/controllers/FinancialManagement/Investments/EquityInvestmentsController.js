const EquityInvestmentsService = require('../../../services/FinancialManagement/Investments/EquityInvestmentsService');

class EquityInvestmentsController {
    async recordPurchase(req, res) {
        try {
            const { ticker, shares, price } = req.body;
            if (!ticker || !shares || !price) return res.status(400).json({ message: "Ticker, Shares, and Price required" });

            const result = await EquityInvestmentsService.recordPurchase(ticker, shares, price, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in EquityInvestmentsController.recordPurchase:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateValuation(req, res) {
        try {
            const { ticker, currentPrice } = req.body;
            if (!ticker || !currentPrice) return res.status(400).json({ message: "Ticker and Current Price required" });

            const result = await EquityInvestmentsService.updateValuation(ticker, currentPrice, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in EquityInvestmentsController.updateValuation:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new EquityInvestmentsController();
