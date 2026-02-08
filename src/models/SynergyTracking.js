const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SynergyTracking = sequelize.define('SynergyTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    synergy_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projected_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    realized_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    measurement_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    variance_reason: {
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
    tableName: 'synergy_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SynergyTracking;
};
