const express = require('express');
const router = express.Router();
const WithholdingTaxesController = require('../controllers/FinancialManagement/Taxation/WithholdingTaxesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate', WithholdingTaxesController.calculateWithholding);

module.exports = router;
