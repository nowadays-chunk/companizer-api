const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OpportunityStages = sequelize.define('OpportunityStages', {
    stage_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    probability_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    sort_order: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    days_in_stage_avg: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    color_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_won_stage: {
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
    tableName: 'opportunity_stages',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return OpportunityStages;
};
