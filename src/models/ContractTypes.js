const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractTypes = sequelize.define('ContractTypes', {
    type_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration_months: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    benefits_included: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'contract_types',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractTypes;
};
