const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WarehouseLayouts = sequelize.define('WarehouseLayouts', {
    layout_id: {
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
    layout_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    blueprint_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zones_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_area_sqm: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ype: {
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
    tableName: 'warehouse_layouts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return WarehouseLayouts;
};
