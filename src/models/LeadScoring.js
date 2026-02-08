const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeadScoring = sequelize.define('LeadScoring', {
    scoring_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lead_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    score_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    demographic_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    behavioral_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    firmographic_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    budget_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    authority_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    need_score: {
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
    tableName: 'lead_scoring',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeadScoring;
};
