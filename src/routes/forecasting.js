const express = require('express');
const router = express.Router();
const ForecastingController = require('../controllers/FinancialManagement/Budget/ForecastingController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate-forecast', ForecastingController.generateForecast);
router.post('/save-scenario', ForecastingController.saveScenario);

module.exports = router;
