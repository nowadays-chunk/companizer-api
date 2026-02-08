const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AfterActionReports = sequelize.define('AfterActionReports', {
    report_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    incident_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    incident_summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    evaluation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    prepared_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lessons_learned: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    effectiveness_rating: {
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
    tableName: 'after_action_reports',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return AfterActionReports;
};
