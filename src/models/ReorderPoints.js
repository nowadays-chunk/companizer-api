const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReorderPoints = sequelize.define('ReorderPoints', {
    reorder_id: {
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
    min_level: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    max_level: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    reorder_point: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    current_stock: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    lead_time_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    safety_stock: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    auto_reorder_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    preferred_vendor_id: {
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
    tableName: 'reorder_points',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ReorderPoints;
};
