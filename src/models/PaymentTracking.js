const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PaymentTracking = sequelize.define('PaymentTracking', {
    tracking_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoice_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount_received: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transaction_reference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bank_fees: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    notes: {
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
    tableName: 'payment_tracking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PaymentTracking;
};
