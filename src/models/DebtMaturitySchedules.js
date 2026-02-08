const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DebtMaturitySchedules = sequelize.define('DebtMaturitySchedules', {
    schedule_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loan_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maturity_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    principal_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    interest_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_payment: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

  }, {
    tableName: 'debt_maturity_schedules',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DebtMaturitySchedules;
};
