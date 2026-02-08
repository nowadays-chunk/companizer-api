const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ForeignCurrencyAccounts = sequelize.define('ForeignCurrencyAccounts', {
    account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    exchange_rate_to_base: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    base_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    swift_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    iban: {
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
    tableName: 'foreign_currency_accounts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ForeignCurrencyAccounts;
};
