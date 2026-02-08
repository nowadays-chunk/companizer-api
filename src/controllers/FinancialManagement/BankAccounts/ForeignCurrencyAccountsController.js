const ForeignCurrencyAccountsService = require('../../../services/FinancialManagement/BankAccounts/ForeignCurrencyAccountsService');

class ForeignCurrencyAccountsController {
    async updateExchangeRate(req, res) {
        try {
            const { currency, rate } = req.body;
            if (!currency || !rate) return res.status(400).json({ message: "Currency and Rate required" });

            const result = await ForeignCurrencyAccountsService.updateExchangeRate(currency, rate, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ForeignCurrencyAccountsController.updateExchangeRate:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new ForeignCurrencyAccountsController();
