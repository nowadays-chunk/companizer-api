const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContractualObligations = sequelize.define('ContractualObligations', {
    obligation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contract_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penalty_clause: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penalty_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    fulfillment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verified_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
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
    tableName: 'contractual_obligations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ContractualObligations;
};
