const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SupplierPerformanceEvaluation = sequelize.define('SupplierPerformanceEvaluation', {
    evaluation_id: {
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
    quality_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    delivery_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    price_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    overall_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    evaluated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_evaluated: {
      type: DataTypes.DATE,
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
    tableName: 'supplier_performance_evaluation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SupplierPerformanceEvaluation;
};
