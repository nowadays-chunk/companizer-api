const express = require('express');
const router = express.Router();
const PurchaseOrdersController = require('../controllers/FinancialManagement/AccountsPayable/PurchaseOrdersController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', PurchaseOrdersController.getAll);
router.get('/:id', PurchaseOrdersController.getById);
router.post('/', PurchaseOrdersController.create);
router.put('/:id', PurchaseOrdersController.update);
router.delete('/:id', PurchaseOrdersController.delete);

module.exports = router;
