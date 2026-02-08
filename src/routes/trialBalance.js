const express = require('express');
const router = express.Router();
const TrialBalanceController = require('../controllers/FinancialManagement/GeneralLedger/TrialBalanceController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate', TrialBalanceController.generate);

module.exports = router;
