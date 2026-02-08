const VatGstRecordsService = require('../../../services/FinancialManagement/Taxation/VatGstRecordsService');

class VatGstRecordsController {
    async generateReport(req, res) {
        try {
            const { period } = req.body;
            const result = await VatGstRecordsService.generateReport(period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VatGstRecordsController.generateReport:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async reconcileVAT(req, res) {
        try {
            const { period } = req.body;
            const result = await VatGstRecordsService.reconcileVAT(period, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VatGstRecordsController.reconcileVAT:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new VatGstRecordsController();
