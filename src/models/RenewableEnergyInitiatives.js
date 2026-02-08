const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RenewableEnergyInitiatives = sequelize.define('RenewableEnergyInitiatives', {
    initiative_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capacity_kw: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    installation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    installer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    investment_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    annual_output_kwh: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    maintenance_schedule: {
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
    tableName: 'renewable_energy_initiatives',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RenewableEnergyInitiatives;
};
