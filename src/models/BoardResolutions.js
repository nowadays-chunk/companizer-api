const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BoardResolutions = sequelize.define('BoardResolutions', {
    resolution_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resolution_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adoption_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    full_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    voting_result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proposed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seconded_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    signed_by_chairman: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    e: {
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
    tableName: 'board_resolutions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return BoardResolutions;
};
