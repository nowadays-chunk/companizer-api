const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProductDetails = sequelize.define('ProductDetails', {
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detail_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'product_details',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProductDetails;
};
