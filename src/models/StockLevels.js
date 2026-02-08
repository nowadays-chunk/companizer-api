const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StockLevels = sequelize.define('StockLevels', {
    stock_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity_available: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    quantity_reserved: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    quantity_total: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    aisle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_counted_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    discrepancy_flag: {
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
    tableName: 'stock_levels',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return StockLevels;
};
