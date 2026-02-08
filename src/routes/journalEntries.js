const express = require('express');
const router = express.Router();
const JournalEntriesController = require('../controllers/FinancialManagement/GeneralLedger/JournalEntriesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/post', JournalEntriesController.postEntry);
router.post('/reverse', JournalEntriesController.reverseEntry);
router.post('/approve', JournalEntriesController.approveEntry);

module.exports = router;
