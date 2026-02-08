const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DebtorAging = sequelize.define('DebtorAging', {
    aging_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parent_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_1_15_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_16_30_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_31_60_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_61_90_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_over_90: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    unapplied_cash: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    disputed_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    retentions_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    on_hold_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    days_past_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    weighted_avg_overdue: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    risk_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    industry_segment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    aging_policy_version: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'v1.0',
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'debtor_aging',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DebtorAging;
};
