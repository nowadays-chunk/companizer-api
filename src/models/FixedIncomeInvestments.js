const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FixedIncomeInvestments = sequelize.define('FixedIncomeInvestments', {
    investment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    security_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    face_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    coupon_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    maturity_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    yield_to_maturity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    credit_rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_frequency: {
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
    tableName: 'fixed_income_investments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FixedIncomeInvestments;
};
