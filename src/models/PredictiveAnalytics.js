const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PredictiveAnalytics = sequelize.define('PredictiveAnalytics', {
    prediction_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prediction_target: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    predicted_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    confidence_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    prediction_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    model_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    input_parameters: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    actual_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    accuracy: {
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
    tableName: 'predictive_analytics',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PredictiveAnalytics;
};
