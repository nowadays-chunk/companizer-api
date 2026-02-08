const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SupportEntitlements = sequelize.define('SupportEntitlements', {
    entitlement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contract_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entitlement_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_units: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    remaining_units: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    service_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overage_policy: {
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
    tableName: 'support_entitlements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SupportEntitlements;
};
