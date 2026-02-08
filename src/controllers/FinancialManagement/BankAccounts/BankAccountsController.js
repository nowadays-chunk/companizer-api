const BankAccountsService = require('../../../services/FinancialManagement/BankAccounts/BankAccountsService');

class BankAccountsController {
    async getAll(req, res) {
        try {
            const result = await BankAccountsService.getAll(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        try {
            const result = await BankAccountsService.create(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTransactions(req, res) {
        try {
            const result = await BankAccountsService.getTransactions(req.params.accountId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new BankAccountsController();
