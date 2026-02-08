const InterestPaymentsService = require('../../../services/FinancialManagement/Debts/InterestPaymentsService');

class InterestPaymentsController {
    async calculateInterest(req, res) {
        try {
            const { debtId, period } = req.body;
            if (!debtId) return res.status(400).json({ message: "Debt ID required" });

            const result = await InterestPaymentsService.calculateInterest(debtId, period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in InterestPaymentsController.calculateInterest:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new InterestPaymentsController();
