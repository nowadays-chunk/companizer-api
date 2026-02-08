const LiquidityManagementService = require('../../../services/FinancialManagement/TreasuryManagement/LiquidityManagementService');

class LiquidityManagementController {
    async calculateRatios(req, res) {
        try {
            const result = await LiquidityManagementService.calculateRatios(req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in LiquidityManagementController.calculateRatios:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new LiquidityManagementController();
