const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MilestoneReporting = sequelize.define('MilestoneReporting', {
    report_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    milestone_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    progress_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status_indicator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reported_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risks_identified: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mitigation_plan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estimated_completion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    blockers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget_consumed: {
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
    tableName: 'milestone_reporting',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MilestoneReporting;
};
