const FiscalPeriodsService = require('../../../services/FinancialManagement/GeneralLedger/FiscalPeriodsService');

class FiscalPeriodsController {
    async closePeriod(req, res) {
        try {
            const { periodId } = req.body;
            if (!periodId) return res.status(400).json({ message: "Period ID required" });

            const result = await FiscalPeriodsService.closePeriod(periodId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in FiscalPeriodsController.closePeriod:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async openPeriod(req, res) {
        try {
            const { periodId } = req.body;
            if (!periodId) return res.status(400).json({ message: "Period ID required" });

            const result = await FiscalPeriodsService.openPeriod(periodId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in FiscalPeriodsController.openPeriod:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new FiscalPeriodsController();
