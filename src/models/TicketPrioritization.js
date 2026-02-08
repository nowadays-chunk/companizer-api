const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TicketPrioritization = sequelize.define('TicketPrioritization', {
    rule_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rule_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    criteria_field: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    criteria_value: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resulting_priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_updated_date: {
      type: DataTypes.DATE,
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
    tableName: 'ticket_prioritization',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TicketPrioritization;
};
