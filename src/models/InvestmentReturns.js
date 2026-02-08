const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InvestmentReturns = sequelize.define('InvestmentReturns', {
    return_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    investment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
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
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    roi_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    date_received: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tax_withheld: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    faker: {
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
    tableName: 'investment_returns',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InvestmentReturns;
};
