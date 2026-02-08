const express = require('express');
const router = express.Router();
const LiquidityManagementController = require('../controllers/FinancialManagement/TreasuryManagement/LiquidityManagementController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate-ratios', LiquidityManagementController.calculateRatios);

module.exports = router;
