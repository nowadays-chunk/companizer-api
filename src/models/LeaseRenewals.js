const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeaseRenewals = sequelize.define('LeaseRenewals', {
    renewal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agreement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    renewal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    new_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rent_increase_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    new_monthly_rent: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    negotiator: {
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
    tableName: 'lease_renewals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeaseRenewals;
};
