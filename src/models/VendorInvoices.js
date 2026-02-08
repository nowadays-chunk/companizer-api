const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VendorInvoices = sequelize.define('VendorInvoices', {
    invoice_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor_id: {
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
    posting_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    tax_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    discount_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    po_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grn_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    match_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    variance_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    payment_terms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    early_payment_discount_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gl_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost_center: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_intercompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ocr_confidence: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'vendor_invoices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VendorInvoices;
};
