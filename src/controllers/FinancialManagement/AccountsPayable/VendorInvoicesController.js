const VendorInvoicesService = require('../../../services/FinancialManagement/AccountsPayable/VendorInvoicesService');

class VendorInvoicesController {
    async matchPO(req, res) {
        try {
            const { invoiceId, poId } = req.body;
            if (!invoiceId || !poId) return res.status(400).json({ message: "Invoice ID and PO ID required" });
            const result = await VendorInvoicesService.matchPO(invoiceId, poId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VendorInvoicesController.matchPO:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async createPaymentBatch(req, res) {
        try {
            const { invoiceIds } = req.body;
            const result = await VendorInvoicesService.createPaymentBatch(invoiceIds, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VendorInvoicesController.createPaymentBatch:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async markAsPaid(req, res) {
        try {
            const { id } = req.params;
            const result = await VendorInvoicesService.markAsPaid(id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VendorInvoicesController.markAsPaid:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new VendorInvoicesController();
