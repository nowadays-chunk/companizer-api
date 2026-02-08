const DebtorAgingService = require('../../../services/FinancialManagement/AccountsReceivable/DebtorAgingService');

class DebtorAgingController {
    async flagBadDebt(req, res) {
        try {
            const { customerId } = req.body;
            if (!customerId) return res.status(400).json({ message: "Customer ID required" });

            const result = await DebtorAgingService.flagBadDebt(customerId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in DebtorAgingController.flagBadDebt:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new DebtorAgingController();
