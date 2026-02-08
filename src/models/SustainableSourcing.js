const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SustainableSourcing = sequelize.define('SustainableSourcing', {
    sourcing_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supplier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    percentage_sustainable: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    certification_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    volume_purchased: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    cost_premium: {
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
    tableName: 'sustainable_sourcing',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SustainableSourcing;
};
