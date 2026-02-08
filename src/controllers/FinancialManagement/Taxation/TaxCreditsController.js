const TaxCreditsService = require('../../../services/FinancialManagement/Taxation/TaxCreditsService');

class TaxCreditsController {
    async calculateCredit(req, res) {
        try {
            const { type, expenses } = req.body;
            const result = await TaxCreditsService.calculateCredit(type, expenses, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxCreditsController.calculateCredit:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async applyCredit(req, res) {
        try {
            const { creditId, filingId } = req.body;
            const result = await TaxCreditsService.applyCredit(creditId, filingId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxCreditsController.applyCredit:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new TaxCreditsController();
