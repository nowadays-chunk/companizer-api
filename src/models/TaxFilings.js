const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaxFilings = sequelize.define('TaxFilings', {
    filing_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    form_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    filed_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    total_tax_liability: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    confirmation_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prepared_by: {
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
    tableName: 'tax_filings',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TaxFilings;
};
