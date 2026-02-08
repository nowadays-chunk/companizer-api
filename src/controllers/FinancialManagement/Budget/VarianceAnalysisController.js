const VarianceAnalysisService = require('../../../services/FinancialManagement/Budget/VarianceAnalysisService');

class VarianceAnalysisController {
    async calculateVariance(req, res) {
        try {
            const { period, departmentId } = req.body;
            const result = await VarianceAnalysisService.calculateVariance(period, departmentId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in VarianceAnalysisController.calculateVariance:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new VarianceAnalysisController();
