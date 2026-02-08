const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PromotionalPricing = sequelize.define('PromotionalPricing', {
    promo_id: {
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
    promo_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discount_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    promo_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usage_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    usage_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    conditions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marketing_channel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
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
    tableName: 'promotional_pricing',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PromotionalPricing;
};
