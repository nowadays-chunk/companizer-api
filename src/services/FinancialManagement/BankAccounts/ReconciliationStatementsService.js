const { query } = require('../../../db');

class ReconciliationStatementsService {
    async matchTransaction(bankTxId, ledgerTxId, organizationId) {
        const sql = `UPDATE bank_transactions SET status = 'reconciled', matched_tx_id = ? WHERE id = ? AND organization_id = ?`;
        await query(sql, [ledgerTxId, bankTxId, organizationId]);
        return { message: "Transaction matched successfully" };
    }

    async importFeed(bankAccountId, feedData, organizationId) {
        // Mock import
        // feedData would be parsed CSV/JSON
        const count = feedData ? feedData.length : 0;
        return { message: `Imported ${count} transactions from feed`, count };
    }

    async autoReconcile(bankAccountId, organizationId) {
        // Mock auto-reconcile logic
        // Find matchable transactions by amount and date
        const sql = `UPDATE bank_transactions SET status = 'reconciled' WHERE account_id = ? AND organization_id = ? AND status = 'pending' LIMIT 5`;
        await query(sql, [bankAccountId, organizationId]);

        return { message: "Auto-reconciliation complete", matched: 5 };
    }
}

module.exports = new ReconciliationStatementsService();
