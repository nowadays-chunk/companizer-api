const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ComplianceAudits = sequelize.define('ComplianceAudits', {
    audit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    compliance_framework: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    auditor_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    findings_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_link: {
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
    tableName: 'governance_compliance_audits',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ComplianceAudits;
};
