const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IntegrationPlans = sequelize.define('IntegrationPlans', {
    plan_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plan_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phase: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    objectives: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    timeline_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    timeline_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    budget_allocated: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    progress: {
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
    tableName: 'integration_plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return IntegrationPlans;
};
