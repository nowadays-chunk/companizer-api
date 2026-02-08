const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LiquidityManagement = sequelize.define('LiquidityManagement', {
    liquidity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    current_ratio: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    quick_ratio: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cash_on_hand: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_working_capital: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_sales_outstanding: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_payable_outstanding: {
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
    tableName: 'liquidity_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LiquidityManagement;
};
