const TrialBalanceService = require('../../../services/FinancialManagement/GeneralLedger/TrialBalanceService');

class TrialBalanceController {
    async generate(req, res) {
        try {
            const { period } = req.body;
            const result = await TrialBalanceService.generate(period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TrialBalanceController.generate:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new TrialBalanceController();
