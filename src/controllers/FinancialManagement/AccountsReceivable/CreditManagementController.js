const CreditManagementService = require('../../../services/FinancialManagement/AccountsReceivable/CreditManagementService');

class CreditManagementController {
    async calculateRisk(req, res) {
        try {
            const { customerId } = req.body;
            if (!customerId) return res.status(400).json({ message: "Customer ID required" });

            const result = await CreditManagementService.calculateRisk(customerId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CreditManagementController.calculateRisk:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async approveProfile(req, res) {
        try {
            const { profileId } = req.body;
            if (!profileId) return res.status(400).json({ message: "Profile ID required" });

            const result = await CreditManagementService.approveProfile(profileId, req.user.id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CreditManagementController.approveProfile:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new CreditManagementController();
