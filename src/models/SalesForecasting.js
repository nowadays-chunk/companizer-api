const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SalesForecasting = sequelize.define('SalesForecasting', {
    forecast_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forecast_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    confidence_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sales_rep_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quota: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    gap_to_quota: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    generated_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    notes: {
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
    tableName: 'sales_forecasting',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SalesForecasting;
};
