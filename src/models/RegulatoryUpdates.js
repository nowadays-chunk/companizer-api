const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RegulatoryUpdates = sequelize.define('RegulatoryUpdates', {
    update_id: {
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
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    published_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    impact_analysis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    action_required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    effective_date: {
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
    tableName: 'regulatory_updates',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RegulatoryUpdates;
};
