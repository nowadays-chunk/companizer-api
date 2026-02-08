const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CrisisCommunicationLogs = sequelize.define('CrisisCommunicationLogs', {
    log_id: {
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
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    message_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipient_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sentiment_analysis: {
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
    tableName: 'crisis_communication_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CrisisCommunicationLogs;
};
