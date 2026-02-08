const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EmployeeVolunteering = sequelize.define('EmployeeVolunteering', {
    event_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    volunteers_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    hours_contributed: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
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
    tableName: 'employee_volunteering',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EmployeeVolunteering;
};
