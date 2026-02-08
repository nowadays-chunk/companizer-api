const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AssetDisposal = sequelize.define('AssetDisposal', {
    disposal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    asset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disposal_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sale_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    book_value_at_disposal: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    gain_loss: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    buyer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorized_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reason: {
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
    tableName: 'asset_disposal_ops',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return AssetDisposal;
};
