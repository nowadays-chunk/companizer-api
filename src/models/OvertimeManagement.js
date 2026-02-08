const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OvertimeManagement = sequelize.define('OvertimeManagement', {
    overtime_id: {
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
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    rate_multiplier: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING,
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
    tableName: 'overtime_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return OvertimeManagement;
};
