const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaskDeadlines = sequelize.define('TaskDeadlines', {
    deadline_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    original_deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    current_deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    extension_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    reason_for_change: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_changed: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    impact_assessment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_hard_deadline: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'task_deadlines',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TaskDeadlines;
};
