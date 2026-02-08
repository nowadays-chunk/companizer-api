const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractRenewals = sequelize.define('ContractRenewals', {
    renewal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    old_contract_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    new_contract_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    new_contract_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salary_revision: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
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
    tableName: 'contract_renewals_hr',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractRenewals;
};
