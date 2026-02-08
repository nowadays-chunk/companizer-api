const express = require('express');
const router = express.Router();
const BankAccountsController = require('../controllers/FinancialManagement/BankAccounts/BankAccountsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', BankAccountsController.getAll);
router.post('/', BankAccountsController.create);
router.get('/:accountId/transactions', BankAccountsController.getTransactions);

module.exports = router;
