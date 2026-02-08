const express = require('express');
const router = express.Router();
const TaxCreditsController = require('../controllers/FinancialManagement/Taxation/TaxCreditsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate', TaxCreditsController.calculateCredit);
router.post('/apply', TaxCreditsController.applyCredit);

module.exports = router;
