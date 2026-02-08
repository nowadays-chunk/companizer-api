const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerInvoices = sequelize.define('CustomerInvoices', {
    invoice_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    creation_source: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'manual',
    },
    invoice_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'standard',
    },
    sales_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subscription_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_list_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_amount_excl_tax: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    total_tax_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    total_amount_incl_tax: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    total_discount_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    header_discount_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    surcharges_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    freight_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    handling_fee: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    rounding_adjustment: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    is_tax_inclusive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tax_jurisdiction_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_tax_exempt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tax_exemption_certificate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_reverse_charge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    withholding_tax_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    e_invoice_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'not_required',
    },
    fiscal_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    digital_signature_hash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_term_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    early_payment_discount_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    early_payment_discount_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    late_payment_interest_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_installment_plan: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    approval_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'draft',
    },
    margin_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_margin_violation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_credit_limit_breach: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approval_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gl_posting_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'pending',
    },
    gl_posting_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    revenue_recognition_rule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deferred_revenue_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    cost_center: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_intercompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    credit_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'ok',
    },
    dunning_level: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    last_dunning_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    collection_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'current',
    },
    promise_to_pay_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    balance_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'unpaid',
    },
    last_payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_disputed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dispute_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    linked_credit_note_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billing_cycle_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    billing_cycle_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_recurring: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    version: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 1,
    },
    is_immutable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    billing_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    shipping_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

  }, {
    tableName: 'customer_invoices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomerInvoices;
};
