const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderStatus = sequelize.define('OrderStatus', {
    status_id: {
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
    current_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_visible_to_customer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cycle_time_hours: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'order_status_history',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return OrderStatus;
};
