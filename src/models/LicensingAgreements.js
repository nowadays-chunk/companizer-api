const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LicensingAgreements = sequelize.define('LicensingAgreements', {
    license_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    licensee: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    licensor: {
      type: DataTypes.STRING,
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
    royalty_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    territory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    exclusivity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    annual_minimum: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
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
    tableName: 'licensing_agreements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LicensingAgreements;
};
