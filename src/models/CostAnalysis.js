const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CostAnalysis = sequelize.define('CostAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    route_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estimated_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    actual_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    variance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_breakdown: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    currency: {
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
    tableName: 'logistics_cost_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CostAnalysis;
};
