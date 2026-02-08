const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InventoryValuation = sequelize.define('InventoryValuation', {
    valuation_id: {
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
    valuation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity_on_hand: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adjusted_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    adjustment_reason: {
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
    tableName: 'inventory_valuation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InventoryValuation;
};
