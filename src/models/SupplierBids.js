const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SupplierBids = sequelize.define('SupplierBids', {
    bid_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rfp_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supplier_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bid_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delivery_time_days: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    proposal_url: {
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
    tableName: 'supplier_bids',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SupplierBids;
};
