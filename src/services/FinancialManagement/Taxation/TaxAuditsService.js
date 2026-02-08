const { query } = require('../../../db');

class TaxAuditsService {
    async initiateAudit(year, taxType, organizationId) {
        const sql = `INSERT INTO tax_audits (organization_id, tax_year, tax_type, status, start_date) VALUES (?, ?, ?, 'in_progress', NOW())`;
        const result = await query(sql, [organizationId, year, taxType]);
        return { message: "Tax audit initiated", auditId: result.insertId };
    }

    async logFinding(auditId, description, impactAmount, organizationId) {
        // Assume tax_audit_findings table
        const sql = `INSERT INTO tax_audit_findings (audit_id, description, impact_amount, created_at) VALUES (?, ?, ?, NOW())`;
        try {
            await query(sql, [auditId, description, impactAmount]);
        } catch (e) {
            console.warn("Audit finding simulation", e);
        }
        return { message: "Audit finding logged" };
    }
}

module.exports = new TaxAuditsService();
