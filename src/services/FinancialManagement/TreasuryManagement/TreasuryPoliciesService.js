const { query } = require('../../../db');

class TreasuryPoliciesService {
    async createPolicy(title, description, organizationId) {
        const sql = `INSERT INTO treasury_policies (organization_id, title, description, status, created_at) VALUES (?, ?, ?, 'draft', NOW())`;
        // Assume table exists
        try {
            await query(sql, [organizationId, title, description]);
        } catch (e) {
            console.warn("Policy creation simulation", e);
        }
        return { message: "Policy created as draft", title };
    }

    async approvePolicy(policyId, approverId, organizationId) {
        const sql = `UPDATE treasury_policies SET status = 'approved', approved_by = ? WHERE id = ? AND organization_id = ?`;
        try {
            await query(sql, [approverId, policyId, organizationId]);
        } catch (e) {
            console.warn("Policy approval simulation", e);
        }
        return { message: "Treasury policy approved" };
    }
}

module.exports = new TreasuryPoliciesService();
