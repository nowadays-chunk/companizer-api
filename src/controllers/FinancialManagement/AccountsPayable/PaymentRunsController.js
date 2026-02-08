const PaymentRunsService = require('../../../services/FinancialManagement/AccountsPayable/PaymentRunsService');

class PaymentRunsController {
    async getAllBatches(req, res) {
        try {
            const result = await PaymentRunsService.getAllBatches(req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in PaymentRunsController.getAllBatches:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getBatchById(req, res) {
        try {
            const result = await PaymentRunsService.getBatchById(req.params.id, req.user.organization_id);
            if (!result) return res.status(404).json({ message: "Batch not found" });
            res.json(result);
        } catch (error) {
            console.error("Error in PaymentRunsController.getBatchById:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async createBatch(req, res) {
        try {
            const result = await PaymentRunsService.createBatch(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            console.error("Error in PaymentRunsController.createBatch:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async addPayment(req, res) {
        try {
            await PaymentRunsService.addPaymentToBatch(req.params.id, req.body, req.user.organization_id);
            res.json({ message: "Payment added to batch" });
        } catch (error) {
            console.error("Error in PaymentRunsController.addPayment:", error);
            res.status(500).json({ message: error.message || "Internal Server Error" });
        }
    }

    async processBatch(req, res) {
        try {
            const result = await PaymentRunsService.processBatch(req.params.id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in PaymentRunsController.processBatch:", error);
            res.status(500).json({ message: error.message || "Internal Server Error" });
        }
    }
}

module.exports = new PaymentRunsController();
