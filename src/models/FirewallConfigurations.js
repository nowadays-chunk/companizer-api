const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FirewallConfigurations = sequelize.define('FirewallConfigurations', {
    config_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firewall_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rule_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destination_ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    port: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    protocol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'firewall_configurations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FirewallConfigurations;
};
