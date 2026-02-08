const express = require('express');
const router = express.Router();
const CreditManagementController = require('../controllers/FinancialManagement/AccountsReceivable/CreditManagementController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/calculate-risk', CreditManagementController.calculateRisk);
router.post('/approve-profile', CreditManagementController.approveProfile);

module.exports = router;
