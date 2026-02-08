const WithholdingTaxesService = require('../../../services/FinancialManagement/Taxation/WithholdingTaxesService');

class WithholdingTaxesController {
    async calculateWithholding(req, res) {
        try {
            const { amount, vendorType } = req.body;
            if (!amount) return res.status(400).json({ message: "Amount required" });

            const result = await WithholdingTaxesService.calculateWithholding(amount, vendorType, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in WithholdingTaxesController.calculateWithholding:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new WithholdingTaxesController();
