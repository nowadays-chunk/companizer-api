const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PerformanceDashboards = sequelize.define('PerformanceDashboards', {
    dashboard_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dashboard_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refresh_rate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    widgets_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    last_accessed: {
      type: DataTypes.DATE,
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
    tableName: 'performance_dashboards',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PerformanceDashboards;
};
