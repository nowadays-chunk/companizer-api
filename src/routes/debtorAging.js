const express = require('express');
const router = express.Router();
const DebtorAgingController = require('../controllers/FinancialManagement/AccountsReceivable/DebtorAgingController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/flag-bad-debt', DebtorAgingController.flagBadDebt);

module.exports = router;
