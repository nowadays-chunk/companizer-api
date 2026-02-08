const { query } = require('../../../db');

class WithholdingTaxesService {
    async calculateWithholding(amount, vendorType, organizationId) {
        // Logic to determine rate based on vendor type/country
        const rate = vendorType === 'foreign' ? 0.15 : 0.0;
        const withholdingAmount = amount * rate;

        return {
            baseAmount: amount,
            vendorType,
            rate: (rate * 100) + '%',
            withholdingAmount
        };
    }
}

module.exports = new WithholdingTaxesService();
