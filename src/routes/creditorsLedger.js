const express = require('express');
const router = express.Router();
const CreditorsLedgerController = require('../controllers/FinancialManagement/AccountsPayable/CreditorsLedgerController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/reconcile-ledger', CreditorsLedgerController.reconcileLedger);
router.post('/generate-statement', CreditorsLedgerController.generateStatement);

module.exports = router;
