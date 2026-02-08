const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const InspectionRecords = sequelize.define('InspectionRecords', {
    inspection_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inspection_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    inspector: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sample_size: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    defects_found: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    severity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
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
    tableName: 'inspection_records',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return InspectionRecords;
};
