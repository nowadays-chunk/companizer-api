const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractCompliance = sequelize.define('ContractCompliance', {
    compliance_id: {
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
    audit_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_compliant: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    violation_details: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    auditor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penalty_assessed: {
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
    tableName: 'contract_compliance',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractCompliance;
};
