const TaxationService = require('../../../services/FinancialManagement/Taxation/TaxationService');

class TaxationController {
    async getFilings(req, res) {
        try {
            const result = await TaxationService.getFilings(req.user.organization_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createFiling(req, res) {
        try {
            const result = await TaxationService.createFiling(req.body, req.user.organization_id);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new TaxationController();
