const { query } = require('../../../db');

class CustomerInvoicesService {
    async sendReminder(invoiceId, organizationId) {
        // Mock email sending
        // In real app, integrate with email service (SendGrid, etc.)

        const sql = `UPDATE ar_invoices SET last_reminder_sent = NOW(), reminder_count = reminder_count + 1 WHERE id = ? AND organization_id = ?`;
        await query(sql, [invoiceId, organizationId]);

        return { message: "Reminder sent to customer" };
    }

    async applyLateFee(invoiceId, feeAmount, organizationId) {
        const sql = `
            UPDATE ar_invoices 
            SET total_amount = total_amount + ?, balance_due = balance_due + ?, notes = CONCAT(IFNULL(notes, ''), ' Late fee applied.')
            WHERE id = ? AND organization_id = ?
        `;
        await query(sql, [feeAmount, feeAmount, invoiceId, organizationId]);
        return { message: "Late fee applied successfully" };
    }
}

module.exports = new CustomerInvoicesService();
