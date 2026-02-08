const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BusinessImpactAnalysis = sequelize.define('BusinessImpactAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    process_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    financial_impact_daily: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    max_tolerable_downtime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recovery_priorities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dependencies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    analyst_name: {
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
    tableName: 'business_impact_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BusinessImpactAnalysis;
};
