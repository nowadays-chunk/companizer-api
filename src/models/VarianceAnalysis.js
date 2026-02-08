const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VarianceAnalysis = sequelize.define('VarianceAnalysis', {
    analysis_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    actual_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    budgeted_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    variance_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    variance_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    is_favorable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    corrective_action: {
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
    tableName: 'variance_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VarianceAnalysis;
};
