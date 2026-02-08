const express = require('express');
const router = express.Router();
const BudgetAllocationsController = require('../controllers/FinancialManagement/Budget/BudgetAllocationsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/allocate', BudgetAllocationsController.allocate);
router.post('/approve', BudgetAllocationsController.approve);

module.exports = router;
