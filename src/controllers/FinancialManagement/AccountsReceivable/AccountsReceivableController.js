const AccountsReceivableService = require('../../../services/FinancialManagement/AccountsReceivable/AccountsReceivableService');

class AccountsReceivableController {
    async getInvoices(req, res) {
        try {
            const result = await AccountsReceivableService.getInvoices(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createInvoice(req, res) {
        try {
            const result = await AccountsReceivableService.createInvoice(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCreditLimit(req, res) {
        try {
            const result = await AccountsReceivableService.getCreditLimit(req.params.customerId, req.user.organization_id);
            if (!result) return res.status(404).json({ message: "Credit limit not set" });
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AccountsReceivableController();
