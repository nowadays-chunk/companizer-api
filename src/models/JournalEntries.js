const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const JournalEntries = sequelize.define('JournalEntries', {
    journal_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    posting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    document_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    journal_source: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'manual',
    },
    journal_category: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'general',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reference_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    legal_entity_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ledger_type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'primary',
    },
    accounting_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'draft',
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exchange_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 1,
    },
    total_debit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    total_credit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_balanced: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    reversal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_reversal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    original_journal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reversal_reason_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_recurring: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    recurrence_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_run_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_accrual: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    auto_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    auto_reversal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_intercompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    intercompany_partner_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approval_workflow_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_approver_id: {
      type: DataTypes.STRING,
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
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    posted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    posted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    audit_pack_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'journal_entries',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return JournalEntries;
};
