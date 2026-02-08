const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ImpactReports = sequelize.define('ImpactReports', {
    report_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    file_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prepared_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    key_highlights: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    published_date: {
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
    tableName: 'impact_reports',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ImpactReports;
};
