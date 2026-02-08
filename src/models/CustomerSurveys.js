const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerSurveys = sequelize.define('CustomerSurveys', {
    survey_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    survey_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    satisfaction_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    nps_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    survey_channel: {
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
    tableName: 'customer_surveys',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomerSurveys;
};
