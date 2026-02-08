const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerHistory = sequelize.define('CustomerHistory', {
    history_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    related_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration_minutes: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    touchpoint_score: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'customer_history',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomerHistory;
};
