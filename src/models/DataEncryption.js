const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DataEncryption = sequelize.define('DataEncryption', {
    encryption_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_set_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    algorithm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    key_rotation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    encryption_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    compliance_standard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    managed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_audit_date: {
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
    tableName: 'data_encryption',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DataEncryption;
};
