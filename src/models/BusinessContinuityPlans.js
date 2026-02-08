const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BusinessContinuityPlans = sequelize.define('BusinessContinuityPlans', {
    plan_id: {
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
    scope: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    critical_functions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rto_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    rpo_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_tested_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    test_result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    activation_procedures_url: {
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
    tableName: 'business_continuity_plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BusinessContinuityPlans;
};
