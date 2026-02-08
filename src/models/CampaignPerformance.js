const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CampaignPerformance = sequelize.define('CampaignPerformance', {
    performance_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campaign_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impressions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    clicks: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    conversions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    ctr: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cpc: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spend: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    roas: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    bounce_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    avg_session_duration: {
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
    tableName: 'campaign_performance',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CampaignPerformance;
};
