const CustomerInvoicesService = require('../../../services/FinancialManagement/AccountsReceivable/CustomerInvoicesService');

class CustomerInvoicesController {
    async sendReminder(req, res) {
        try {
            const { invoiceId } = req.body;
            if (!invoiceId) return res.status(400).json({ message: "Invoice ID required" });

            const result = await CustomerInvoicesService.sendReminder(invoiceId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CustomerInvoicesController.sendReminder:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async applyLateFee(req, res) {
        try {
            const { invoiceId, feeAmount } = req.body;
            if (!invoiceId || !feeAmount) return res.status(400).json({ message: "Invoice ID and Fee Amount required" });

            const result = await CustomerInvoicesService.applyLateFee(invoiceId, feeAmount, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CustomerInvoicesController.applyLateFee:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new CustomerInvoicesController();
