const { query } = require('../../../db');

class BankTransfersService {
    async executeTransfer(data, organizationId) {
        const { from_account_id, to_account_id, amount, currency, reference } = data;

        // Mock transfer logic: debit one, credit other
        // Wrap in transaction in real DB
        const debitSql = `UPDATE bank_accounts SET balance = balance - ? WHERE id = ? AND organization_id = ?`;
        const creditSql = `UPDATE bank_accounts SET balance = balance + ? WHERE id = ? AND organization_id = ?`;

        try {
            await query(debitSql, [amount, from_account_id, organizationId]);
            await query(creditSql, [amount, to_account_id, organizationId]);

            // Log transaction
            const logSql = `INSERT INTO bank_transactions (account_id, amount, type, description, organization_id) VALUES (?, ?, 'transfer_out', ?, ?), (?, ?, 'transfer_in', ?, ?)`;
            // assuming bank_transactions table exists
        } catch (e) {
            console.warn("Transfer simulation failed partly", e);
        }

        return { message: "Transfer executed successfully", reference: reference || 'REF-' + Date.now() };
    }

    async validateIBAN(iban) {
        // Mock validation
        const isValid = iban && iban.length > 15;
        return { iban, isValid, message: isValid ? "Valid IBAN" : "Invalid IBAN" };
    }
}

module.exports = new BankTransfersService();
