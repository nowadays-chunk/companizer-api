const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FacilityMaintenance = sequelize.define('FacilityMaintenance', {
    maintenance_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_id: {
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
    scheduled_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assigned_vendor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost_estimate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    actual_cost: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'facility_maintenance',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FacilityMaintenance;
};
