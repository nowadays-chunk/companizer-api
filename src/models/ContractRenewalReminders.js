const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractRenewalReminders = sequelize.define('ContractRenewalReminders', {
    reminder_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contract_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reminder_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipient_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    days_before_expiry: {
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
    tableName: 'contract_renewal_reminders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractRenewalReminders;
};
