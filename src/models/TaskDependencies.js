const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaskDependencies = sequelize.define('TaskDependencies', {
    dependency_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    predecessor_task_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    successor_task_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dependency_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lag_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_critical: {
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
    tableName: 'task_dependencies',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TaskDependencies;
};
