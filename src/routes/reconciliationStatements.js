const express = require('express');
const router = express.Router();
const ReconciliationStatementsController = require('../controllers/FinancialManagement/BankAccounts/ReconciliationStatementsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/match-transaction', ReconciliationStatementsController.matchTransaction);
router.post('/import-feed', ReconciliationStatementsController.importFeed);
router.post('/auto-reconcile', ReconciliationStatementsController.autoReconcile);

module.exports = router;
