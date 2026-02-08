const express = require('express');
const router = express.Router();
const TaxationController = require('../controllers/FinancialManagement/Taxation/TaxationController');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

router.get('/filings', TaxationController.getFilings);
router.post('/filings', TaxationController.createFiling);

module.exports = router;
