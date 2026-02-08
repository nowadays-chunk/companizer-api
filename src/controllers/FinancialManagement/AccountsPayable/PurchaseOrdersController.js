const PurchaseOrdersService = require('../../../services/FinancialManagement/AccountsPayable/PurchaseOrdersService');

class PurchaseOrdersController {
    async getAll(req, res) {
        try {
            const { vendor_id } = req.query;
            if (vendor_id) {
                const result = await PurchaseOrdersService.getByVendor(vendor_id, req.user.organization_id);
                return res.json(result);
            }
            const result = await PurchaseOrdersService.getAll(req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in PurchaseOrdersController.getAll:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getById(req, res) {
        try {
            const result = await PurchaseOrdersService.getById(req.params.id, req.user.organization_id);
            if (!result) return res.status(404).json({ message: "Purchase Order not found" });
            res.json(result);
        } catch (error) {
            console.error("Error in PurchaseOrdersController.getById:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req, res) {
        try {
            const result = await PurchaseOrdersService.create(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            console.error("Error in PurchaseOrdersController.create:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async update(req, res) {
        try {
            const result = await PurchaseOrdersService.update(req.params.id, req.body, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in PurchaseOrdersController.update:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async delete(req, res) {
        try {
            await PurchaseOrdersService.delete(req.params.id, req.user.organization_id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            console.error("Error in PurchaseOrdersController.delete:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new PurchaseOrdersController();
