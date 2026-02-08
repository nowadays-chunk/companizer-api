const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BankTransfers = sequelize.define('BankTransfers', {
    transfer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    from_account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    to_account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transfer_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reference_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fee_amount: {
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
    tableName: 'bank_transfers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BankTransfers;
};
