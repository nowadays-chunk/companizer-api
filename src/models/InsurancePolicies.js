const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InsurancePolicies = sequelize.define('InsurancePolicies', {
    policy_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
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
    coverage_limit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    deductible: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    broker_contact: {
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
    tableName: 'insurance_policies',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InsurancePolicies;
};
