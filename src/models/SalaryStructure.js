const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SalaryStructure = sequelize.define('SalaryStructure', {
    structure_id: {
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
    base_salary: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    effective_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    housing_allowance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    transport_allowance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    ype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'salary_structure',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SalaryStructure;
};
