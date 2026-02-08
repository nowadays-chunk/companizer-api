const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CarbonFootprintTracking = sequelize.define('CarbonFootprintTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reporting_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scope_1_emissions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    scope_2_emissions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    scope_3_emissions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_emissions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'MT CO2e',
    },
    calculation_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    offset_purchased: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_emissions: {
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
    tableName: 'carbon_footprint_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CarbonFootprintTracking;
};
