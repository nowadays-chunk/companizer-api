const express = require('express');
const router = express.Router();
const ForeignCurrencyAccountsController = require('../controllers/FinancialManagement/BankAccounts/ForeignCurrencyAccountsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/update-rate', ForeignCurrencyAccountsController.updateExchangeRate);

module.exports = router;
