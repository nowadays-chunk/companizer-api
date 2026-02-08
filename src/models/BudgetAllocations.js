const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BudgetAllocations = sequelize.define('BudgetAllocations', {
    allocation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fiscal_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    allocated_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    spent_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    remaining_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approved_by: {
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
    tableName: 'budget_allocations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BudgetAllocations;
};
