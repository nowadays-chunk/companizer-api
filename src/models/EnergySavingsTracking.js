const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnergySavingsTracking = sequelize.define('EnergySavingsTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    initiative_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    kwh_saved: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_saved: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    baseline_usage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    actual_usage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    weather_adjustment: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    e: {
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
    tableName: 'energy_savings_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EnergySavingsTracking;
};
