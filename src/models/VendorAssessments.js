const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VendorAssessments = sequelize.define('VendorAssessments', {
    assessment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assessment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assessor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overall_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    criteria_quality: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    criteria_delivery: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    criteria_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    risk_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recommendation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
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
    tableName: 'vendor_assessments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VendorAssessments;
};
