const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SoftwareLicenses = sequelize.define('SoftwareLicenses', {
    license_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    software_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    license_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seats_total: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    seats_used: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cost_per_seat: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_subscription: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    auto_renew: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    admin_email: {
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
    tableName: 'software_licenses',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SoftwareLicenses;
};
