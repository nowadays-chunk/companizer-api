const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SwotAnalysis = sequelize.define('SwotAnalysis', {
    swot_id: {
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
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    strengths: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    weaknesses: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    opportunities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    threats: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    analyst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    related_product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conclusion: {
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
    tableName: 'swot_analysis',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SwotAnalysis;
};
