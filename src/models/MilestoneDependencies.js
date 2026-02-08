const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MilestoneDependencies = sequelize.define('MilestoneDependencies', {
    dependency_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    predecessor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    successor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dependency_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lag_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_critical_path: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    lead_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_date: {
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
    tableName: 'milestone_dependencies',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MilestoneDependencies;
};
