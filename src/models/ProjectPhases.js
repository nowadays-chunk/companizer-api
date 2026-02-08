const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProjectPhases = sequelize.define('ProjectPhases', {
    phase_id: {
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
    phase_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    budget_allocation: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    manager_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    objectives: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_sequence: {
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
    tableName: 'project_phases',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProjectPhases;
};
