const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RoiAnalysis = sequelize.define('RoiAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campaign_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_revenue: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    roi_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_profit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    analysis_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customer_acquisition_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    lifetime_value_projection: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    conversion_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    analyst_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    benchmark_roi: {
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
    tableName: 'roi_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RoiAnalysis;
};
