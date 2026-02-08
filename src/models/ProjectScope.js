const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProjectScope = sequelize.define('ProjectScope', {
    scope_id: {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    in_scope: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    out_of_scope: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    version_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    change_log: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assumptions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    constraints: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document_url: {
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
    tableName: 'project_scope',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProjectScope;
};
