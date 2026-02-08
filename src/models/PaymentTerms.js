const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PaymentTerms = sequelize.define('PaymentTerms', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    term_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    effective_from: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    effective_to: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    due_date_method: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'fixed_days',
    },
    due_date_basis: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'invoice_date',
    },
    days_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cutoff_day: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    discount_rules: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    penalty_rules: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    installment_plan: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    term_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'payment_terms',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PaymentTerms;
};
