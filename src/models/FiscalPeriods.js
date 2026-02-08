const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FiscalPeriods = sequelize.define('FiscalPeriods', {
    period_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fiscal_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    period_number: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_adjustment_period: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    closed_by: {
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
    tableName: 'fiscal_periods',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FiscalPeriods;
};
