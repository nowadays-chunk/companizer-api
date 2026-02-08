const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PublicStatements = sequelize.define('PublicStatements', {
    statement_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spokesperson: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statement_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date_issued: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    context: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_link: {
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
    tableName: 'public_statements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PublicStatements;
};
