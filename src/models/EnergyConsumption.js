const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnergyConsumption = sequelize.define('EnergyConsumption', {
    consumption_id: {
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
    meter_reading: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    reading_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    utility_provider: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    energy_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usage_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    peak_demand: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_estimated: {
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
    tableName: 'energy_consumption',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EnergyConsumption;
};
