const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaxAudits = sequelize.define('TaxAudits', {
    audit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tax_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    authority: {
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
    auditor_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_tax_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    penalty_amount: {
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
    tableName: 'tax_audits',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TaxAudits;
};
