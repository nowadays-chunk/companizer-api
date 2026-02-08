const TaxFilingsService = require('../../../services/FinancialManagement/Taxation/TaxFilingsService');

class TaxFilingsController {
    async generateFiling(req, res) {
        try {
            const { year, period } = req.body;
            const result = await TaxFilingsService.generateFiling(year, period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxFilingsController.generateFiling:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async submitFiling(req, res) {
        try {
            const { filingId } = req.body;
            if (!filingId) return res.status(400).json({ message: "Filing ID required" });

            const result = await TaxFilingsService.submitFiling(filingId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxFilingsController.submitFiling:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new TaxFilingsController();
