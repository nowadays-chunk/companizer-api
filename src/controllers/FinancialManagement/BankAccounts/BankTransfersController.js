const BankTransfersService = require('../../../services/FinancialManagement/BankAccounts/BankTransfersService');

class BankTransfersController {
    async executeTransfer(req, res) {
        try {
            const { from_account_id, to_account_id, amount } = req.body;
            if (!from_account_id || !to_account_id || !amount) {
                return res.status(400).json({ message: "Source, destination, and amount required" });
            }

            const result = await BankTransfersService.executeTransfer(req.body, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in BankTransfersController.executeTransfer:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async validateIBAN(req, res) {
        try {
            const { iban } = req.body;
            const result = await BankTransfersService.validateIBAN(iban);
            res.json(result);
        } catch (error) {
            console.error("Error in BankTransfersController.validateIBAN:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new BankTransfersController();
