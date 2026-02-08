const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DisasterRecoveryPlans = sequelize.define('DisasterRecoveryPlans', {
    recovery_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plan_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    system_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recovery_tier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    backup_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    failover_procedure: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    primary_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondary_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_test_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    test_outcome: {
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
    tableName: 'disaster_recovery_plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DisasterRecoveryPlans;
};
