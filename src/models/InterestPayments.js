const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InterestPayments = sequelize.define('InterestPayments', {
    payment_id: {
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
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    rate_applied: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    period_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    period_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    recipient: {
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
    tableName: 'interest_payments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InterestPayments;
};
