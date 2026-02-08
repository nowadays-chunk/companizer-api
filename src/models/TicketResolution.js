const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TicketResolution = sequelize.define('TicketResolution', {
    resolution_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ticket_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resolution_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resolved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    customer_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    time_spent_minutes: {
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
    tableName: 'ticket_resolution',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TicketResolution;
};
