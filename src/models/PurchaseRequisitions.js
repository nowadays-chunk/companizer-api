const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PurchaseRequisitions = sequelize.define('PurchaseRequisitions', {
    requisition_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    requester_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    estimated_cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    required_date: {
      type: DataTypes.DATE,
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
    tableName: 'purchase_requisitions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PurchaseRequisitions;
};
