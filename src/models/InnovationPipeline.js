const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InnovationPipeline = sequelize.define('InnovationPipeline', {
    innovation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idea_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    target_launch_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    project_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget_allocated: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    roi_projection: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    risks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    progress_percent: {
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
    tableName: 'innovation_pipeline',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InnovationPipeline;
};
