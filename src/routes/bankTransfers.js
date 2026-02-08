const express = require('express');
const router = express.Router();
const BankTransfersController = require('../controllers/FinancialManagement/BankAccounts/BankTransfersController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/execute-transfer', BankTransfersController.executeTransfer);
router.post('/validate-iban', BankTransfersController.validateIBAN);

module.exports = router;
