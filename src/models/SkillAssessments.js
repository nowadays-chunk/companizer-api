const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SkillAssessments = sequelize.define('SkillAssessments', {
    assessment_id: {
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
    skill_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proficiency_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assessment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assessed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    target_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gap_analysis: {
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
    tableName: 'skill_assessments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SkillAssessments;
};
