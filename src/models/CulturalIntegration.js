const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CulturalIntegration = sequelize.define('CulturalIntegration', {
    integration_id: {
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
    initiative_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    focus_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    employee_feedback_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    participation_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
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
    tableName: 'cultural_integration',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CulturalIntegration;
};
