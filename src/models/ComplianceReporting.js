const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ComplianceReporting = sequelize.define('ComplianceReporting', {
    report_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    regulatory_body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    confirmation_receipt: {
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
    tableName: 'compliance_reporting',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ComplianceReporting;
};
