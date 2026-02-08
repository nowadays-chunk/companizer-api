const express = require('express');
const router = express.Router();
const GeneralLedgerController = require('../controllers/FinancialManagement/GeneralLedger/GeneralLedgerController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/accounts', GeneralLedgerController.getChartOfAccounts);
router.post('/accounts', GeneralLedgerController.createAccount);
router.get('/journal-entries', GeneralLedgerController.getJournalEntries);
router.post('/journal-entries', GeneralLedgerController.createJournalEntry);

module.exports = router;
