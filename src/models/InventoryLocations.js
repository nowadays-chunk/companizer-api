const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InventoryLocations = sequelize.define('InventoryLocations', {
    location_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    warehouse_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aisle: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    rack: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    shelf: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    bin: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    capacity_volume: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    capacity_weight: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_occupied: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_refrigerated: {
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
    tableName: 'inventory_locations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InventoryLocations;
};
