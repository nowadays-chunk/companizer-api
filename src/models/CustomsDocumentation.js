const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomsDocumentation = sequelize.define('CustomsDocumentation', {
    doc_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doc_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    declaration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customs_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reference_number: {
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
    tableName: 'customs_documentation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomsDocumentation;
};
