const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TicketEscalation = sequelize.define('TicketEscalation', {
    escalation_id: {
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
    escalated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    escalated_to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    escalation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
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
    tableName: 'ticket_escalation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TicketEscalation;
};
