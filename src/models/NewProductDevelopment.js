const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const NewProductDevelopment = sequelize.define('NewProductDevelopment', {
    npd_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    concept_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phase: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    target_launch_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    budget: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    lead_manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    market_potential: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risks: {
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
    tableName: 'new_product_development',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return NewProductDevelopment;
};
