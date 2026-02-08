const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CashFlowForecasts = sequelize.define('CashFlowForecasts', {
    forecast_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    opening_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    projected_inflow: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    projected_outflow: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    closing_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    confidence_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    e: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    options: {
      type: DataTypes.STRING,
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
    tableName: 'cash_flow_forecasts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CashFlowForecasts;
};
