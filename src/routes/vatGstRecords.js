const express = require('express');
const router = express.Router();
const VatGstRecordsController = require('../controllers/FinancialManagement/Taxation/VatGstRecordsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate-report', VatGstRecordsController.generateReport);
router.post('/reconcile', VatGstRecordsController.reconcileVAT);

module.exports = router;
