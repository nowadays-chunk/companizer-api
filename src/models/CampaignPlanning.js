const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CampaignPlanning = sequelize.define('CampaignPlanning', {
    plan_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campaign_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    objective: {
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
    budget: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    channel_strategy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_audience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    key_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creative_assets_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manager_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agency_id: {
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
    tableName: 'campaign_planning',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CampaignPlanning;
};
