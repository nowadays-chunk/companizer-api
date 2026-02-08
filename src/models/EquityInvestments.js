const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EquityInvestments = sequelize.define('EquityInvestments', {
    investment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    avg_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    current_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    market_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    unrealized_gain_loss: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dividend_yield: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'equity_investments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EquityInvestments;
};
