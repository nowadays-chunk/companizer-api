const express = require('express');
const router = express.Router();
const AccountsReceivableController = require('../controllers/FinancialManagement/AccountsReceivable/AccountsReceivableController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/invoices', AccountsReceivableController.getInvoices);
router.post('/invoices', AccountsReceivableController.createInvoice);
router.get('/credit-limit/:customerId', AccountsReceivableController.getCreditLimit);

module.exports = router;
