const { query } = require('../../../db');

class TrialBalanceService {
    async generate(period, organizationId) {
        // Mock Trial Balance generation
        // Aggregate credits/debits from GL
        const data = [
            { account: 'Cash', debit: 50000, credit: 0 },
            { account: 'Accounts Receivable', debit: 20000, credit: 0 },
            { account: 'Accounts Payable', debit: 0, credit: 15000 },
            { account: 'Revenue', debit: 0, credit: 55000 },
            { account: 'Expenses', debit: 0, credit: 0 } // Imbalanced for mock?
        ];

        const totalDebit = data.reduce((sum, row) => sum + row.debit, 0);
        const totalCredit = data.reduce((sum, row) => sum + row.credit, 0);

        return { period, data, totalDebit, totalCredit, isBalanced: totalDebit === totalCredit };
    }
}

module.exports = new TrialBalanceService();
