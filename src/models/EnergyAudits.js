const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnergyAudits = sequelize.define('EnergyAudits', {
    audit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_id: {
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
    auditor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    efficiency_rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    findings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recommendations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    potential_savings: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    compliance_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_document: {
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
    tableName: 'energy_audits',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EnergyAudits;
};
