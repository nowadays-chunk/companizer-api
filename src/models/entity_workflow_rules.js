const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const entity_workflow_rules = sequelize.define('entity_workflow_rules', {
    entity_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rule_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rule_value: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    error_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

  }, {
    tableName: 'entity_workflow_rules',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return entity_workflow_rules;
};
