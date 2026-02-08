const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SecurityAudits = sequelize.define('SecurityAudits', {
    audit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    auditor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vulnerabilities_found_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    critical_issues: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    remediation_plan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'security_audits',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SecurityAudits;
};
