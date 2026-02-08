const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RevenueSharingAgreements = sequelize.define('RevenueSharingAgreements', {
    agreement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partner_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    share_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    basis_of_calculation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    effective_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    min_guarantee: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_scope: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document_url: {
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
    tableName: 'revenue_sharing_agreements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RevenueSharingAgreements;
};
