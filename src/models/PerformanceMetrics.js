const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PerformanceMetrics = sequelize.define('PerformanceMetrics', {
    metric_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partner_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    delivery_timeliness: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    damage_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_efficiency: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
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
    tableName: 'logistics_performance_metrics',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PerformanceMetrics;
};
