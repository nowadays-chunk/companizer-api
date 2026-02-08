const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LearningPaths = sequelize.define('LearningPaths', {
    path_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    path_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    course_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    estimated_duration_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_mandatory_for_role: {
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
    tableName: 'learning_paths',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LearningPaths;
};
