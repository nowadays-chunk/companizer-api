const express = require('express');
const router = express.Router();
const InterestPaymentsController = require('../controllers/FinancialManagement/Debts/InterestPaymentsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate', InterestPaymentsController.calculateInterest);

module.exports = router;
