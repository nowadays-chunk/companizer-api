const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StakeholderAnalysis = sequelize.define('StakeholderAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stakeholder_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    influence_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interest_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    key_concerns: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    expectations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    engagement_strategy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    analyst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    analysis_date: {
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
    tableName: 'stakeholder_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return StakeholderAnalysis;
};
