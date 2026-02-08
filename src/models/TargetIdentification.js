const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TargetIdentification = sequelize.define('TargetIdentification', {
    target_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_company_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    revenue: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    ebitda: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    strategic_fit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_person: {
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
    tableName: 'target_identification',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TargetIdentification;
};
