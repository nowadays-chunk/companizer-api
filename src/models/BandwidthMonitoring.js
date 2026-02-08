const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BandwidthMonitoring = sequelize.define('BandwidthMonitoring', {
    monitor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    network_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upload_speed: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    download_speed: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    latency_ms: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    packet_loss: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    jitter: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    peak_usage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isp_provider: {
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
    tableName: 'bandwidth_monitoring',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BandwidthMonitoring;
};
