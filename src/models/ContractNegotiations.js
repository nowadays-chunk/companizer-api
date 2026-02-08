const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractNegotiations = sequelize.define('ContractNegotiations', {
    negotiation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supplier_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    negotiator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    key_terms_discussed: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    target_savings: {
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
    tableName: 'contract_negotiations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractNegotiations;
};
