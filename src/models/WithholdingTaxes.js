const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WithholdingTaxes = sequelize.define('WithholdingTaxes', {
    record_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    withholding_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    withheld_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tax_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificate_issued: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'withholding_taxes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return WithholdingTaxes;
};
