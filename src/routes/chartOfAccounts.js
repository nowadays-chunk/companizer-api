const express = require('express');
const router = express.Router();
const ChartOfAccountsController = require('../controllers/FinancialManagement/GeneralLedger/ChartOfAccountsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/validate', ChartOfAccountsController.validateStructure);

module.exports = router;
