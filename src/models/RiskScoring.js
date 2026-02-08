const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RiskScoring = sequelize.define('RiskScoring', {
    score_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risk_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    likelihood: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    impact: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    risk_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    score_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assessed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score_methodology: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trend: {
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
    tableName: 'risk_scoring',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RiskScoring;
};
