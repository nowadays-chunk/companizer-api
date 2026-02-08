const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WasteManagement = sequelize.define('WasteManagement', {
    record_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    waste_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight_kg: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    collection_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    disposal_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    manifest_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diversion_rate: {
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
    tableName: 'waste_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return WasteManagement;
};
