const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RentalAgreements = sequelize.define('RentalAgreements', {
    agreement_id: {
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
    tenant_name: {
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
    monthly_rent: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    security_deposit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    payment_due_day: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    renewal_terms: {
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
    tableName: 'rental_agreements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RentalAgreements;
};
