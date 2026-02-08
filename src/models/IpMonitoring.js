const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IpMonitoring = sequelize.define('IpMonitoring', {
    monitoring_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_asset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alert_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    potential_infringement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    severity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action_taken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    analyst: {
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
    tableName: 'ip_monitoring',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return IpMonitoring;
};
