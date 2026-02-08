const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DocumentationManagement = sequelize.define('DocumentationManagement', {
    doc_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doc_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    file_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size_kb: {
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
    tableName: 'documentation_management',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return DocumentationManagement;
};
