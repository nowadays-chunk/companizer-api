const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SettlementAgreements = sequelize.define('SettlementAgreements', {
    settlement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    settlement_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    terms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    signed_by_plaintiff: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    signed_by_defendant: {
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
    tableName: 'settlement_agreements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SettlementAgreements;
};
