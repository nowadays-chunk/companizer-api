const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProductDiscontinuation = sequelize.define('ProductDiscontinuation', {
    discontinuation_id: {
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
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    decision_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_of_life_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    phase_out_plan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    replacement_product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inventory_action: {
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
    tableName: 'product_discontinuation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProductDiscontinuation;
};
