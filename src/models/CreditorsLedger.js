const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CreditorsLedger = sequelize.define('CreditorsLedger', {
    creditor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditor_account_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entity_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business_unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fiscal_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    fiscal_period: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    posting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    document_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gl_control_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subledger_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ledger_mode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'open_item',
    },
    version_number: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 1,
    },
    is_current_version: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    superseded_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    immutable_record: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source_document_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_document_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_document_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_intercompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    intercompany_partner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_accrual: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_prepaid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    accrual_reversal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_fx_revaluation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    revaluation_run_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_system_generated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    posting_source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    open_item_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    open_item_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'open',
    },
    original_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    cleared_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    residual_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    clearing_document_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clearing_document_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clearing_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    clearing_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partial_payment_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    settlement_group_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_disputed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dispute_reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_on_hold: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    hold_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_blocked_for_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    payment_block_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    promise_to_pay_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    baseline_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    aging_bucket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    days_overdue: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_overdue: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    weighted_avg_due_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    dpo_contribution: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cash_requirement_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_priority_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_high_risk_overdue: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    aging_snapshot_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reconciliation_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'unreconciled',
    },
    last_reconciliation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reconciliation_run_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    out_of_balance_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    clearing_difference: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    write_off_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    write_off_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    write_off_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tolerance_variance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_within_tolerance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_suspense_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    suspense_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reconciliation_approval_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_evidence_ids: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transaction_currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaction_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    local_currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    local_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    group_currency: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'USD',
    },
    group_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    fx_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    fx_rate_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fx_rate_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    realized_fx_gain_loss: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    unrealized_fx_revaluation: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    fx_difference_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vat_payable_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    vat_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    withholding_tax_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    withholding_tax_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_reverse_charge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    reverse_charge_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tax_authority_creditor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_statutory_reporting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    statutory_report_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tax_reconciliation_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'none',
    },
    dispute_reason_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    dispute_workflow_stage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_raised_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dispute_resolved_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    exception_type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'none',
    },
    hold_reason_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    legal_hold: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    vendor_risk_hold: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    compliance_hold: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    quality_issue_hold: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    risk_indicator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_proposal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_batch_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_run_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    settlement_posting_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    settlement_document_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overpayment_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 0,
    },
    credit_balance_carryforward: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    netting_settlement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_netting_eligible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    bank_reconciliation_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    failed_payment_indicator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    payment_failure_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_reversal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audit_trail_reference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sox_control_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    posting_approval_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'draft',
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approval_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    period_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    period_lock_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    credit_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    last_payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_payment_amount: {
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
    total_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

  }, {
    tableName: 'creditors_ledger',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CreditorsLedger;
};
