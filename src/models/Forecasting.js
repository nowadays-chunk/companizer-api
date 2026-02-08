const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Forecasting = sequelize.define('Forecasting', {
    forecast_id: {
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
    forecasted_revenue: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    forecasted_expenses: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    forecasted_profit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    methodology: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    confidence_level: {
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
    tableName: 'financial_forecasting',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Forecasting;
};
