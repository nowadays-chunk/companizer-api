const express = require('express');
const router = express.Router();
const InvestmentReturnsController = require('../controllers/FinancialManagement/Investments/InvestmentReturnsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate-roi', InvestmentReturnsController.calculateROI);

module.exports = router;
