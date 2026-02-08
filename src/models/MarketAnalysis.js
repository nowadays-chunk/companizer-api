const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MarketAnalysis = sequelize.define('MarketAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    market_segment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    market_size: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    growth_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    competitor_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    opportunities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    threats: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    analyst_id: {
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
    tableName: 'market_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MarketAnalysis;
};
