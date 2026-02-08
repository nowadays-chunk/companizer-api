const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ChartOfAccounts = sequelize.define('ChartOfAccounts', {
    account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reporting_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_fr: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_de: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_es: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    natural_balance: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'debit',
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    effective_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    effective_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    parent_account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_level: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
      defaultValue: 1,
    },
    tree_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sort_order: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    segment_company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_cost_center: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_project: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_custom_1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_custom_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_string: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alias_account_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_global_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    legal_entity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    local_statutory_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ledger_types: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: primary,
    },
    posting_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    is_summary_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    account_open_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    account_close_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    manual_posting_restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    system_only_posting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    requires_approval: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_suspense_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_clearing_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_intercompany_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    default_tax_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tax_recoverable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    vat_designation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'none',
    },
    withholding_tax_relevant: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    reverse_charge_applicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    statutory_account_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    saft_mapping_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fec_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    regulatory_classification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance_sheet_line: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pl_statement_line: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cash_flow_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    management_rollup_1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    management_rollup_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statutory_rollup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ic_due_to_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ic_due_from_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    elimination_account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transfer_pricing_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    consolidation_adjustment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    minority_interest_mapping: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    group_reporting_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sox_control_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    audit_pack_id: {
      type: DataTypes.STRING,
      allowNull: true,
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
    superseded_by_account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approval_status: {
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
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_template: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    template_industry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    default_ar_revenue: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    default_ap_expense: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    default_ap_liability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    asset_capitalization: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    inventory_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    payroll_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_sensitive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    access_role_required: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    legacy_account_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    migration_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'not_migrated',
    },
    cutover_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'chart_of_accounts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ChartOfAccounts;
};
