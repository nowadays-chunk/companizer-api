const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WinLossAnalysis = sequelize.define('WinLossAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opportunity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reason_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    competitor_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    decision_maker_feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    analysis_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    analyst_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deal_size: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    sales_cycle_days: {
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
    tableName: 'win_loss_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return WinLossAnalysis;
};
