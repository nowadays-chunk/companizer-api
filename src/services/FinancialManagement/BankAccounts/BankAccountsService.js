const { query } = require('../../../db');

class BankAccountsService {
    async getAll(organizationId) {
        return await query('SELECT * FROM bank_accounts WHERE organization_id = ?', [organizationId]);
    }

    async create(data, organizationId) {
        const { account_name, account_number, bank_name, currency, balance } = data;
        const sql = `INSERT INTO bank_accounts (organization_id, account_name, account_number, bank_name, currency, balance) VALUES (?, ?, ?, ?, ?, ?)`;
        const result = await query(sql, [organizationId, account_name, account_number, bank_name, currency, balance || 0]);
        return { id: result.insertId, ...data };
    }

    async getTransactions(accountId, organizationId) {
        // Verify account belongs to org
        const account = await query('SELECT id FROM bank_accounts WHERE id = ? AND organization_id = ?', [accountId, organizationId]);
        if (!account.length) return [];

        return await query('SELECT * FROM bank_transactions WHERE account_id = ? ORDER BY transaction_date DESC', [accountId]);
    }
}

module.exports = new BankAccountsService();
