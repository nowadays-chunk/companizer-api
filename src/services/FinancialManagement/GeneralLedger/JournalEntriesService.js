const { query } = require('../../../db');

class JournalEntriesService {
    async postEntry(entryId, organizationId) {
        const sql = `UPDATE journal_entries SET status = 'posted', posted_at = NOW() WHERE id = ? AND organization_id = ? AND status = 'approved'`;
        const result = await query(sql, [entryId, organizationId]);

        if (result.affectedRows === 0) {
            throw new Error("Entry not found or not in 'approved' state");
        }
        return { message: "Journal entry posted to GL" };
    }

    async reverseEntry(entryId, organizationId) {
        // Create a reversal entry logic would ideally duplicate with negative amounts
        // Here we just mark status or create a simple record
        const sql = `UPDATE journal_entries SET status = 'reversed' WHERE id = ? AND organization_id = ?`;
        await query(sql, [entryId, organizationId]);
        return { message: "Journal entry reversed" };
    }

    async approveEntry(entryId, approverId, organizationId) {
        const sql = `UPDATE journal_entries SET status = 'approved', approved_by = ? WHERE id = ? AND organization_id = ?`;
        await query(sql, [approverId, entryId, organizationId]);
        return { message: "Journal entry approved" };
    }
}

module.exports = new JournalEntriesService();
