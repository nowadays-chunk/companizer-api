const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Payslips = sequelize.define('Payslips', {
    payslip_id: {
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
    period_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    period_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gross_pay: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_pay: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    deductions: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    taxes: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
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
    tableName: 'payslips',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Payslips;
};
