const express = require('express');
const router = express.Router();
const TaxAuditsController = require('../controllers/FinancialManagement/Taxation/TaxAuditsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/initiate', TaxAuditsController.initiateAudit);
router.post('/log-finding', TaxAuditsController.logFinding);

module.exports = router;
