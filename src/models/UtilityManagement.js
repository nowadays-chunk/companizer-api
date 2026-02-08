const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UtilityManagement = sequelize.define('UtilityManagement', {
    utility_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    property_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    utility_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billing_cycle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usage_metric: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    last_bill_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    last_bill_date: {
      type: DataTypes.DATE,
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
    tableName: 'utility_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return UtilityManagement;
};
