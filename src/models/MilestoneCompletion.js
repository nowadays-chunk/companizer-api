const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MilestoneCompletion = sequelize.define('MilestoneCompletion', {
    completion_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    milestone_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliverables_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quality_check_passed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    client_signoff: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    signoff_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    delay_variance_days: {
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
    tableName: 'milestone_completion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MilestoneCompletion;
};
