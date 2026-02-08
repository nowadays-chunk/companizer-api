const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaxCredits = sequelize.define('TaxCredits', {
    credit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    credit_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    fiscal_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    claimed_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    remaining_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    eligibility_criteria: {
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
    tableName: 'tax_credits',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TaxCredits;
};
