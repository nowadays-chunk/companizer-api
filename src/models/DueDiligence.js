const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DueDiligence = sequelize.define('DueDiligence', {
    due_diligence_id: {
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
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    findings_summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    risk_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_url: {
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
    tableName: 'due_diligence',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DueDiligence;
};
