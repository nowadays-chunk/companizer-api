const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CourtAppearances = sequelize.define('CourtAppearances', {
    appearance_id: {
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
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    judge: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attendee_attorney: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    next_appearance_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    type: {
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
    tableName: 'court_appearances',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CourtAppearances;
};
