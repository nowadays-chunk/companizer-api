const { query } = require('../../../db');

class GeneralLedgerService {
    async getChartOfAccounts(organizationId) {
        return await query('SELECT * FROM chart_of_accounts WHERE organization_id = ? ORDER BY code', [organizationId]);
    }

    async createAccount(data, organizationId) {
        const { code, name, type } = data;
        const sql = `INSERT INTO chart_of_accounts (organization_id, code, name, type) VALUES (?, ?, ?, ?)`;
        const result = await query(sql, [organizationId, code, name, type]);
        return { id: result.insertId, ...data };
    }

    async getJournalEntries(organizationId) {
        return await query('SELECT * FROM journal_entries WHERE organization_id = ? ORDER BY date DESC', [organizationId]);
    }

    async createJournalEntry(data, organizationId) {
        const { date, description, reference, lines } = data;

        // Transaction wrapper ideally
        const entrySql = `INSERT INTO journal_entries (organization_id, date, description, reference, status) VALUES (?, ?, ?, ?, 'posted')`;
        const entryResult = await query(entrySql, [organizationId, date, description, reference]);
        const entryId = entryResult.insertId;

        if (lines && lines.length > 0) {
            for (const line of lines) {
                const lineSql = `INSERT INTO journal_lines (entry_id, account_id, debit, credit, description) VALUES (?, ?, ?, ?, ?)`;
                await query(lineSql, [entryId, line.account_id, line.debit || 0, line.credit || 0, line.description || '']);
            }
        }

        return { id: entryId, ...data };
    }
}

module.exports = new GeneralLedgerService();
