const express = require('express');
const router = express.Router();
const PaymentTermsController = require('../controllers/FinancialManagement/AccountsPayable/PaymentTermsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/apply-term', PaymentTermsController.applyTerm);
router.post('/calculate', PaymentTermsController.calculateDueDate);

module.exports = router;
