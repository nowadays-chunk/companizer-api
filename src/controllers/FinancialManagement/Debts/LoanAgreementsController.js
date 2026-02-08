const LoanAgreementsService = require('../../../services/FinancialManagement/Debts/LoanAgreementsService');

class LoanAgreementsController {
    async validateCovenants(req, res) {
        try {
            const { loanId } = req.body;
            if (!loanId) return res.status(400).json({ message: "Loan ID required" });

            const result = await LoanAgreementsService.validateCovenants(loanId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in LoanAgreementsController.validateCovenants:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new LoanAgreementsController();
