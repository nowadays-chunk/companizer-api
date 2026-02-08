const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VendorOnboarding = sequelize.define('VendorOnboarding', {
    onboarding_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documents_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    bank_details_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    nda_signed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    compliance_check_passed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    onboarding_manager: {
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
    tableName: 'vendor_onboarding',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VendorOnboarding;
};
