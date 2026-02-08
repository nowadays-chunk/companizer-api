const express = require('express');
const router = express.Router();
const PaymentRunsController = require('../controllers/FinancialManagement/AccountsPayable/PaymentRunsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', PaymentRunsController.getAllBatches);
router.get('/:id', PaymentRunsController.getBatchById);
router.post('/', PaymentRunsController.createBatch);
router.post('/:id/payments', PaymentRunsController.addPayment);
router.post('/:id/process', PaymentRunsController.processBatch);

module.exports = router;
