const express = require('express');
const router = express.Router();
const FiscalPeriodsController = require('../controllers/FinancialManagement/GeneralLedger/FiscalPeriodsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/close', FiscalPeriodsController.closePeriod);
router.post('/open', FiscalPeriodsController.openPeriod);

module.exports = router;
