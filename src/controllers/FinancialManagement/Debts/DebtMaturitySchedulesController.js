const DebtMaturitySchedulesService = require('../../../services/FinancialManagement/Debts/DebtMaturitySchedulesService');

class DebtMaturitySchedulesController {
    async generateSchedule(req, res) {
        try {
            const { debtId } = req.body;
            if (!debtId) return res.status(400).json({ message: "Debt ID required" });

            const result = await DebtMaturitySchedulesService.generateSchedule(debtId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in DebtMaturitySchedulesController.generateSchedule:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new DebtMaturitySchedulesController();
