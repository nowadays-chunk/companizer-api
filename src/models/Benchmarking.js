const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Benchmarking = sequelize.define('Benchmarking', {
    benchmark_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    metric_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry_avg: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    company_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_recorded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    competitor_best: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    gap_analysis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    target_value: {
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
    tableName: 'benchmarking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Benchmarking;
};
