const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CrisisResponsePlans = sequelize.define('CrisisResponsePlans', {
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
    scenario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activation_criteria: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    key_contacts: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    version: {
      type: DataTypes.STRING,
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
    tableName: 'crisis_response_plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CrisisResponsePlans;
};
