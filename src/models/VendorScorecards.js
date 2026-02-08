const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VendorScorecards = sequelize.define('VendorScorecards', {
    scorecard_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor_id: {
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
    average_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quality_rating: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    timeliness_rating: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_rating: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    innovation_rating: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    generated_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    review_meeting_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    e: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'vendor_scorecards',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VendorScorecards;
};
