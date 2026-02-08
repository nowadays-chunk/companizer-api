const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderTracking = sequelize.define('OrderTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status_update: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    carrier: {
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
    tableName: 'order_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return OrderTracking;
};
