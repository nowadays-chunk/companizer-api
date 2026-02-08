const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeaveBalances = sequelize.define('LeaveBalances', {
    balance_id: {
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
    leave_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    used_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    remaining_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    carry_over_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    last_updated: {
      type: DataTypes.DATE,
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
    tableName: 'leave_balances',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeaveBalances;
};
