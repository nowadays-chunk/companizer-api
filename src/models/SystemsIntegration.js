const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SystemsIntegration = sequelize.define('SystemsIntegration', {
    system_integration_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    system_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disposition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_migration_status: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    user_migration_status: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    technical_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risks: {
      type: DataTypes.TEXT,
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
    tableName: 'systems_integration',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SystemsIntegration;
};
