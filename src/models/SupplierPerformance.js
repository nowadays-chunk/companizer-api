const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SupplierPerformance = sequelize.define('SupplierPerformance', {
    performance_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supplier_id: {
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
    score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    on_time_delivery_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    quality_defect_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    response_time_avg: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_competitiveness: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    evaluated_by: {
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
    tableName: 'supplier_performance_ops',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SupplierPerformance;
};
