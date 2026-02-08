const ReconciliationStatementsService = require('../../../services/FinancialManagement/BankAccounts/ReconciliationStatementsService');

class ReconciliationStatementsController {
    async matchTransaction(req, res) {
        try {
            const { bankTxId, ledgerTxId } = req.body;
            if (!bankTxId || !ledgerTxId) return res.status(400).json({ message: "Transaction IDs required" });

            const result = await ReconciliationStatementsService.matchTransaction(bankTxId, ledgerTxId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ReconciliationStatementsController.matchTransaction:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async importFeed(req, res) {
        try {
            const { bankAccountId, feedData } = req.body;
            const result = await ReconciliationStatementsService.importFeed(bankAccountId, feedData, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ReconciliationStatementsController.importFeed:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async autoReconcile(req, res) {
        try {
            const { bankAccountId } = req.body;
            const result = await ReconciliationStatementsService.autoReconcile(bankAccountId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in ReconciliationStatementsController.autoReconcile:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new ReconciliationStatementsController();
