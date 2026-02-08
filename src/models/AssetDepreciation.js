const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AssetDepreciation = sequelize.define('AssetDepreciation', {
    record_id: {
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
    fiscal_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    depreciation_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opening_book_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    depreciation_expense: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    closing_book_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    useful_life: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    salvage_value: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    date_calculated: {
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
    tableName: 'asset_depreciation_ops',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return AssetDepreciation;
};
