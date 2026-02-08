const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractTerminations = sequelize.define('ContractTerminations', {
    termination_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    termination_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notice_period_served: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    exit_interview_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    final_payout_amount: {
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
    tableName: 'contract_terminations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractTerminations;
};
