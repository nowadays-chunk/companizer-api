const TreasuryPoliciesService = require('../../../services/FinancialManagement/TreasuryManagement/TreasuryPoliciesService');

class TreasuryPoliciesController {
    async createPolicy(req, res) {
        try {
            const { title, description } = req.body;
            if (!title) return res.status(400).json({ message: "Title required" });

            const result = await TreasuryPoliciesService.createPolicy(title, description, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TreasuryPoliciesController.createPolicy:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async approvePolicy(req, res) {
        try {
            const { policyId } = req.body;
            if (!policyId) return res.status(400).json({ message: "Policy ID required" });

            const result = await TreasuryPoliciesService.approvePolicy(policyId, req.user.id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in TreasuryPoliciesController.approvePolicy:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new TreasuryPoliciesController();
