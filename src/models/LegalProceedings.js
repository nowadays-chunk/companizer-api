const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LegalProceedings = sequelize.define('LegalProceedings', {
    proceeding_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proceeding_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    court: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    judge: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attendees: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faker: {
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
    tableName: 'legal_proceedings',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LegalProceedings;
};
