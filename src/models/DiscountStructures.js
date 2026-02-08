const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DiscountStructures = sequelize.define('DiscountStructures', {
    structure_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    min_quantity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    max_quantity: {
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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    customer_segment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approval_required: {
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
    tableName: 'discount_structures',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DiscountStructures;
};
