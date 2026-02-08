const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EmployeePortals = sequelize.define('EmployeePortals', {
    portal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    portal_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    access_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    admin_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
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
    tableName: 'employee_portals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EmployeePortals;
};
