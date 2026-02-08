const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PropertyTaxes = sequelize.define('PropertyTaxes', {
    tax_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    property_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    amount_due: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    amount_paid: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    authority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    receipt_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assessed_value: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'property_taxes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PropertyTaxes;
};
