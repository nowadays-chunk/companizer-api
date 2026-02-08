const { query } = require('../../../db');

class CreditManagementService {
    async calculateRisk(customerId, organizationId) {
        // Mock risk calculation logic
        // In reality, this would query payment history, credit scores, etc.
        const score = Math.floor(Math.random() * 850);
        const riskLevel = score > 700 ? 'Low' : score > 500 ? 'Medium' : 'High';

        // Update customer profile with new risk
        const sql = `UPDATE credit_profiles SET risk_score = ?, risk_level = ? WHERE customer_id = ? AND organization_id = ?`;

        // We assume credit_profiles table exists or we update customer table
        try {
            await query(sql, [score, riskLevel, customerId, organizationId]);
        } catch (e) {
            console.warn("Could not update credit_profiles", e);
        }

        return { customerId, score, riskLevel, message: "Risk calculated successfully" };
    }

    async approveProfile(profileId, approvedBy, organizationId) {
        const sql = `
            UPDATE credit_profiles 
            SET status = 'approved', approved_by = ?, approval_date = NOW()
            WHERE id = ? AND organization_id = ?
        `;
        await query(sql, [approvedBy, profileId, organizationId]);
        return { message: "Credit profile approved" };
    }
}

module.exports = new CreditManagementService();
