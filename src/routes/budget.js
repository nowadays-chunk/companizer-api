const express = require('express');
const router = express.Router();
const BudgetController = require('../controllers/FinancialManagement/Budget/BudgetController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', BudgetController.getAll);
router.post('/', BudgetController.create);
router.get('/:budgetId/items', BudgetController.getItems);
router.post('/:budgetId/items', BudgetController.addItem);

module.exports = router;
