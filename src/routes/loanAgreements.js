const express = require('express');
const router = express.Router();
const LoanAgreementsController = require('../controllers/FinancialManagement/Debts/LoanAgreementsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/validate-covenants', LoanAgreementsController.validateCovenants);

module.exports = router;
