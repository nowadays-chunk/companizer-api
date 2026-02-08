const express = require('express');
const router = express.Router();
const FixedIncomeInvestmentsController = require('../controllers/FinancialManagement/Investments/FixedIncomeInvestmentsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate-accrued-interest', FixedIncomeInvestmentsController.calculateAccruedInterest);

module.exports = router;
