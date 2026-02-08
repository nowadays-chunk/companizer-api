const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeadConversionRates = sequelize.define('LeadConversionRates', {
    rate_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_leads: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    converted_leads: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    conversion_rate_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campaign_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avg_time_to_convert_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_per_acquisition: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    industry_segment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
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
    tableName: 'lead_conversion_rates',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeadConversionRates;
};
