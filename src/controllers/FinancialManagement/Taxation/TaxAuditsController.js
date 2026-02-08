const TaxAuditsService = require('../../../services/FinancialManagement/Taxation/TaxAuditsService');

class TaxAuditsController {
    async initiateAudit(req, res) {
        try {
            const { year, taxType } = req.body;
            if (!year || !taxType) return res.status(400).json({ message: "Year and Tax Type required" });

            const result = await TaxAuditsService.initiateAudit(year, taxType, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxAuditsController.initiateAudit:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async logFinding(req, res) {
        try {
            const { auditId, description, impactAmount } = req.body;
            if (!auditId || !description) return res.status(400).json({ message: "Audit ID and Description required" });

            const result = await TaxAuditsService.logFinding(auditId, description, impactAmount, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TaxAuditsController.logFinding:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new TaxAuditsController();
