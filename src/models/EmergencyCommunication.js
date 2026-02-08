const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EmergencyCommunication = sequelize.define('EmergencyCommunication', {
    comm_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    incident_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sent_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    recipient_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message_body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    delivery_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    success_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    sender_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    acknowledgement_required: {
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
    tableName: 'emergency_communication',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EmergencyCommunication;
};
