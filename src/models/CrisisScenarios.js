const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CrisisScenarios = sequelize.define('CrisisScenarios', {
    scenario_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scenario_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risk_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    probability: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mitigation_measures: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trigger_events: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    simulation_date: {
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
    tableName: 'crisis_scenarios',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CrisisScenarios;
};
