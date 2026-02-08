const GeneralLedgerService = require('../../../services/FinancialManagement/GeneralLedger/GeneralLedgerService');

class GeneralLedgerController {
    async getChartOfAccounts(req, res) {
        try {
            const result = await GeneralLedgerService.getChartOfAccounts(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createAccount(req, res) {
        try {
            const result = await GeneralLedgerService.createAccount(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getJournalEntries(req, res) {
        try {
            const result = await GeneralLedgerService.getJournalEntries(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createJournalEntry(req, res) {
        try {
            const result = await GeneralLedgerService.createJournalEntry(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new GeneralLedgerController();
