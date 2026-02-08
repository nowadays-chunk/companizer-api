const express = require('express');
const router = express.Router();
const VarianceAnalysisController = require('../controllers/FinancialManagement/Budget/VarianceAnalysisController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate', VarianceAnalysisController.calculateVariance);

module.exports = router;
