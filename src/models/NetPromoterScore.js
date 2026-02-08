const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const NetPromoterScore = sequelize.define('NetPromoterScore', {
    nps_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    nps_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    survey_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customer_segment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campaign_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    response_time_sec: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    device_type: {
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
    tableName: 'net_promoter_score',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return NetPromoterScore;
};
