const express = require('express');
const router = express.Router();
const TaxFilingsController = require('../controllers/FinancialManagement/Taxation/TaxFilingsController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.post('/generate', TaxFilingsController.generateFiling);
router.post('/submit', TaxFilingsController.submitFiling);

module.exports = router;
