const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RiskIdentification = sequelize.define('RiskIdentification', {
    risk_id: {
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
    risk_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risk_owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_identified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    identified_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    root_cause: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    potential_impact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
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
    tableName: 'risk_identification',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RiskIdentification;
};
