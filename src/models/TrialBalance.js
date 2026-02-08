const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrialBalance = sequelize.define('TrialBalance', {
    tb_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    total_debits: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_credits: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    difference: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_balanced: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    generated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
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
    tableName: 'trial_balance',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TrialBalance;
};
