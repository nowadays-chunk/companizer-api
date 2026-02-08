const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ClaimsManagement = sequelize.define('ClaimsManagement', {
    claim_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    incident_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    claim_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approved_amount: {
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
    tableName: 'insurance_claims',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ClaimsManagement;
};
