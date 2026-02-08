const BudgetAllocationsService = require('../../../services/FinancialManagement/Budget/BudgetAllocationsService');

class BudgetAllocationsController {
    async allocate(req, res) {
        try {
            const { department_id, amount } = req.body;
            if (!department_id || !amount) return res.status(400).json({ message: "Department and Amount required" });

            const result = await BudgetAllocationsService.allocate(req.body, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in BudgetAllocationsController.allocate:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async approve(req, res) {
        try {
            const { allocationId } = req.body;
            if (!allocationId) return res.status(400).json({ message: "Allocation ID required" });

            const result = await BudgetAllocationsService.approve(allocationId, req.user.id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in BudgetAllocationsController.approve:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new BudgetAllocationsController();
