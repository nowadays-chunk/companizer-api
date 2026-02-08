const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReconciliationStatements = sequelize.define('ReconciliationStatements', {
    reconciliation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statement_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bank_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    book_balance: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    difference: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reconciled_by: {
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
    total_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

  }, {
    tableName: 'reconciliation_statements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ReconciliationStatements;
};
