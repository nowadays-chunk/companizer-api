const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GreenInitiatives = sequelize.define('GreenInitiatives', {
    initiative_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    progress_percentage: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    budget: {
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
    tableName: 'green_initiatives',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return GreenInitiatives;
};
