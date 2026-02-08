const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MaintenanceLogs = sequelize.define('MaintenanceLogs', {
    log_id: {
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
    maintenance_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    performed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    maintenance_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    parts_used: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_maintenance_due: {
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
    tableName: 'maintenance_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MaintenanceLogs;
};
