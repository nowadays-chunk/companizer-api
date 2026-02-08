const express = require('express');
const router = express.Router();
const DebtMaturitySchedulesController = require('../controllers/FinancialManagement/Debts/DebtMaturitySchedulesController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate-schedule', DebtMaturitySchedulesController.generateSchedule);

module.exports = router;
