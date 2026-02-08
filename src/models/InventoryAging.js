const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InventoryAging = sequelize.define('InventoryAging', {
    aging_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    age_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    aging_bucket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    batch_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
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
    tableName: 'inventory_aging',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InventoryAging;
};
