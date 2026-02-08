const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ServiceRenewals = sequelize.define('ServiceRenewals', {
    renewal_id: {
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
    current_expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    renewal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    renewal_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_contact_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reminder_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    auto_renew: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    term_extension_months: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    discount_applied: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    sales_rep_id: {
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
    tableName: 'service_renewals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ServiceRenewals;
};
