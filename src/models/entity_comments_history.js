const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const entity_comments_history = sequelize.define('entity_comments_history', {
    comment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entity_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    processing_step: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    unit_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    tableName: 'entity_comments_history',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return entity_comments_history;
};
