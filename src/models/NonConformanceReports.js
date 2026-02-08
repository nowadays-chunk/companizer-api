const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const NonConformanceReports = sequelize.define('NonConformanceReports', {
    ncr_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    detected_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_detected: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    severity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disposition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    root_cause: {
      type: DataTypes.TEXT,
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
    tableName: 'non_conformance_reports',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return NonConformanceReports;
};
