const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LogisticsRoutes = sequelize.define('LogisticsRoutes', {
    route_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    route_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_point: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    end_point: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estimated_distance_km: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    estimated_time_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    carrier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vehicle_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost_per_trip: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'logistics_routes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LogisticsRoutes;
};
