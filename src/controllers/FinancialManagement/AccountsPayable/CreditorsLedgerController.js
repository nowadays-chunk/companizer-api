const CreditorsLedgerService = require('../../../services/FinancialManagement/AccountsPayable/CreditorsLedgerService');

class CreditorsLedgerController {
    async reconcileLedger(req, res) {
        try {
            const { vendorId } = req.body;
            if (!vendorId) return res.status(400).json({ message: "Vendor ID required" });

            const result = await CreditorsLedgerService.reconcileLedger(vendorId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CreditorsLedgerController.reconcileLedger:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async generateStatement(req, res) {
        try {
            const { vendorId, periodStart, periodEnd } = req.body;
            if (!vendorId) return res.status(400).json({ message: "Vendor ID required" });

            const result = await CreditorsLedgerService.generateStatement(vendorId, periodStart, periodEnd, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in CreditorsLedgerController.generateStatement:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new CreditorsLedgerController();
