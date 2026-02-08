const { query } = require('../../../db');

class DebtMaturitySchedulesService {
    async generateSchedule(debtId, organizationId) {
        // Fetch debt details
        // Mock data
        const debtAmount = 500000;
        const interestRate = 0.05;
        const termMonths = 60;

        const schedule = [];
        let balance = debtAmount;
        const monthlyPayment = (debtAmount * (interestRate / 12)) / (1 - Math.pow(1 + (interestRate / 12), -termMonths));

        for (let i = 1; i <= termMonths; i++) {
            const interest = balance * (interestRate / 12);
            const principal = monthlyPayment - interest;
            balance -= principal;

            schedule.push({
                period: i,
                payment: monthlyPayment.toFixed(2),
                principal: principal.toFixed(2),
                interest: interest.toFixed(2),
                balance: Math.max(0, balance).toFixed(2)
            });
        }

        return { debtId, schedule };
    }
}

module.exports = new DebtMaturitySchedulesService();
