const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Discounts = sequelize.define('Discounts', {
    discount_id: {
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
    discount_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discount_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    min_purchase_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    max_usage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    usage_count: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'discounts_ops',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Discounts;
};
