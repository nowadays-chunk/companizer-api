const PaymentTermsService = require('../../../services/FinancialManagement/AccountsPayable/PaymentTermsService');

class PaymentTermsController {
    async applyTerm(req, res) {
        try {
            const { vendorId, paymentTermId } = req.body;
            if (!vendorId || !paymentTermId) return res.status(400).json({ message: "Vendor ID and Payment Term ID required" });

            const result = await PaymentTermsService.applyTerm(vendorId, paymentTermId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in PaymentTermsController.applyTerm:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async calculateDueDate(req, res) {
        try {
            const { baseDate } = req.body;
            // Config can come from body (simulated) or be fetched by ID
            const config = req.body.config;

            if (!config || !baseDate) {
                return res.status(400).json({ message: "Missing config or baseDate" });
            }

            const dueDate = PaymentTermsService.calculateDueDate(config, baseDate);
            res.json({ dueDate });
        } catch (error) {
            console.error("Error in PaymentTermsController.calculateDueDate:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new PaymentTermsController();
