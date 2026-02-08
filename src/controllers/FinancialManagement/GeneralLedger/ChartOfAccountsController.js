const ChartOfAccountsService = require('../../../services/FinancialManagement/GeneralLedger/ChartOfAccountsService');

class ChartOfAccountsController {
    async validateStructure(req, res) {
        try {
            const result = await ChartOfAccountsService.validateStructure(req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ChartOfAccountsController.validateStructure:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new ChartOfAccountsController();
