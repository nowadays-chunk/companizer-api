const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ServiceLevelAgreements = sequelize.define('ServiceLevelAgreements', {
    sla_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sla_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    response_time_target_min: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    resolution_time_target_hour: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    business_hours_start: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    business_hours_end: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    support_timezone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penalty_per_breach: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    escalation_policy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'service_level_agreements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ServiceLevelAgreements;
};
