const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ResolutionTimeTracking = sequelize.define('ResolutionTimeTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ticket_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    duration_minutes: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sla_target_minutes: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hold_duration_minutes: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    business_hours_only: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'resolution_time_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ResolutionTimeTracking;
};
