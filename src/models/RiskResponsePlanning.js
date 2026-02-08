const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RiskResponsePlanning = sequelize.define('RiskResponsePlanning', {
    response_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    risk_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strategy_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    planned_action: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responsible_person: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resources_required: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost_estimate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    approval_date: {
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
    tableName: 'risk_response_planning',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return RiskResponsePlanning;
};
