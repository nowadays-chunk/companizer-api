const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RiskAssessments = sequelize.define('RiskAssessments', {
    assessment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assessment_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assessor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overall_risk_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scope: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_risks_identified: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    key_findings: {
      type: DataTypes.TEXT,
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
    tableName: 'governance_risk_assessments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RiskAssessments;
};
