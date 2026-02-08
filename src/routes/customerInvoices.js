const express = require('express');
const router = express.Router();
const CustomerInvoicesController = require('../controllers/FinancialManagement/AccountsReceivable/CustomerInvoicesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/send-reminder', CustomerInvoicesController.sendReminder);
router.post('/apply-late-fee', CustomerInvoicesController.applyLateFee);

module.exports = router;
