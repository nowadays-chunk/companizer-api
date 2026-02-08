const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VersionControl = sequelize.define('VersionControl', {
    version_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    version_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    release_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    commit_hash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_stable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    download_url: {
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
    tableName: 'version_control',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VersionControl;
};
