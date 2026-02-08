const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PreventiveMaintenanceSchedules = sequelize.define('PreventiveMaintenanceSchedules', {
    schedule_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    asset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    next_due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assigned_to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estimated_duration: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    e: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    options: {
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
    tableName: 'preventive_maintenance_schedules',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PreventiveMaintenanceSchedules;
};
