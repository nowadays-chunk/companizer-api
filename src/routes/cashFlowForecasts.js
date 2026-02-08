const express = require('express');
const router = express.Router();
const CashFlowForecastsController = require('../controllers/FinancialManagement/TreasuryManagement/CashFlowForecastsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate-forecast', CashFlowForecastsController.generateForecast);

module.exports = router;
