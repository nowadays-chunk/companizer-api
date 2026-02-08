const express = require('express');
const router = express.Router();
const EquityInvestmentsController = require('../controllers/FinancialManagement/Investments/EquityInvestmentsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/record-purchase', EquityInvestmentsController.recordPurchase);
router.post('/update-valuation', EquityInvestmentsController.updateValuation);

module.exports = router;
