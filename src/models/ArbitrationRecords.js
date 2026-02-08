const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ArbitrationRecords = sequelize.define('ArbitrationRecords', {
    arbitration_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispute_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    arbitrator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hearing_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.TEXT,
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
    tableName: 'arbitration_records',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ArbitrationRecords;
};
