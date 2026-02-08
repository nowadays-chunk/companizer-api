const BudgetService = require('../../../services/FinancialManagement/Budget/BudgetService');

class BudgetController {
    async getAll(req, res) {
        try {
            const result = await BudgetService.getAll(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        try {
            const result = await BudgetService.create(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getItems(req, res) {
        try {
            const result = await BudgetService.getItems(req.params.budgetId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async addItem(req, res) {
        try {
            const result = await BudgetService.addItem(req.params.budgetId, req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new BudgetController();
