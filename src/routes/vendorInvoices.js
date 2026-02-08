const express = require('express');
const router = express.Router();
const VendorInvoicesController = require('../controllers/FinancialManagement/AccountsPayable/VendorInvoicesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/match', VendorInvoicesController.matchPO);
router.post('/create-payment-batch', VendorInvoicesController.createPaymentBatch);
router.post('/:id/mark-paid', VendorInvoicesController.markAsPaid);

module.exports = router;
