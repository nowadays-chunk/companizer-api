const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FeedbackAnalysis = sequelize.define('FeedbackAnalysis', {
    analysis_id: {
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
    total_feedback_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    average_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    top_keywords: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    positive_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    negative_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    neutral_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    trend_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    generated_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
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
    tableName: 'feedback_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FeedbackAnalysis;
};
