const express = require('express');
const router = express.Router();
const TreasuryPoliciesController = require('../controllers/FinancialManagement/TreasuryManagement/TreasuryPoliciesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/create', TreasuryPoliciesController.createPolicy);
router.post('/approve', TreasuryPoliciesController.approvePolicy);

module.exports = router;
