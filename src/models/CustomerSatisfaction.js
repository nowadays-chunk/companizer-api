const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerSatisfaction = sequelize.define('CustomerSatisfaction', {
    csat_id: {
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
    score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    survey_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interaction_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sentiment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_resolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    response_time: {
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
    tableName: 'customer_satisfaction',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomerSatisfaction;
};
