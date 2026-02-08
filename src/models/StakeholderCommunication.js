const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StakeholderCommunication = sequelize.define('StakeholderCommunication', {
    communication_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stakeholder_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    participants: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_steps: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attachments_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    options: {
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
    tableName: 'stakeholder_communication',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return StakeholderCommunication;
};
