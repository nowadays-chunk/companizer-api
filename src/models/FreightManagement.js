const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FreightManagement = sequelize.define('FreightManagement', {
    freight_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    carrier_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight_kg: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    volume_cbm: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estimated_cost: {
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
    tableName: 'freight_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FreightManagement;
};
