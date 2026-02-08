const InvestmentReturnsService = require('../../../services/FinancialManagement/Investments/InvestmentReturnsService');

class InvestmentReturnsController {
    async calculateROI(req, res) {
        try {
            const { investmentId } = req.body;
            if (!investmentId) return res.status(400).json({ message: "Investment ID required" });

            const result = await InvestmentReturnsService.calculateROI(investmentId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in InvestmentReturnsController.calculateROI:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new InvestmentReturnsController();
