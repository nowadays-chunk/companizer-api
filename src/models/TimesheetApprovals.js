const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TimesheetApprovals = sequelize.define('TimesheetApprovals', {
    approval_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approver_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    period_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    submitted_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    approval_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rejection_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_breakdown: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ype: {
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
    tableName: 'project_timesheet_approvals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TimesheetApprovals;
};
