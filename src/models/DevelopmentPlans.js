const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DevelopmentPlans = sequelize.define('DevelopmentPlans', {
    plan_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    career_goal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strengths: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    areas_for_improvement: {
      type: DataTypes.TEXT,
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
    tableName: 'development_plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DevelopmentPlans;
};
