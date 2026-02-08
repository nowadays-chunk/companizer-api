const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PolicyRenewals = sequelize.define('PolicyRenewals', {
    renewal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    renewal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    new_premium: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pe: {
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
    tableName: 'policy_renewals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PolicyRenewals;
};
