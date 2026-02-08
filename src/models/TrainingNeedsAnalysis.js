const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrainingNeedsAnalysis = sequelize.define('TrainingNeedsAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    identified_need: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recommended_training: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_audience_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    estimated_budget: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
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
    tableName: 'training_needs_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TrainingNeedsAnalysis;
};
