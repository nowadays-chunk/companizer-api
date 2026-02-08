const FixedIncomeInvestmentsService = require('../../../services/FinancialManagement/Investments/FixedIncomeInvestmentsService');

class FixedIncomeInvestmentsController {
    async calculateAccruedInterest(req, res) {
        try {
            const { investmentId } = req.body;
            if (!investmentId) return res.status(400).json({ message: "Investment ID required" });

            const result = await FixedIncomeInvestmentsService.calculateAccruedInterest(investmentId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in FixedIncomeInvestmentsController.calculateAccruedInterest:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new FixedIncomeInvestmentsController();
