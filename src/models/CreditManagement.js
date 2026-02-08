const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CreditManagement = sequelize.define('CreditManagement', {
    cms_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parent_entity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_responsibility_owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_segment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    effective_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    version_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    temp_credit_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    temp_limit_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    seasonal_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    insurance_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    current_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    open_invoices_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    open_orders_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    disputed_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    credit_utilization: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    risk_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    external_rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risk_class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    insurance_provider: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coverage_percent: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    guarantee_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    guarantee_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    guarantee_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    credit_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    next_review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_history_rating: {
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
    tableName: 'credit_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CreditManagement;
};
