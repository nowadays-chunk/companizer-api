const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VatGstRecords = sequelize.define('VatGstRecords', {
    record_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tax_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tax_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    net_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_input_tax: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    jurisdiction: {
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
    tableName: 'vat_gst_records',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VatGstRecords;
};
