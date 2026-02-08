const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VolunteerInitiatives = sequelize.define('VolunteerInitiatives', {
    initiative_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_range: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_hours_contributed: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    employee_participation_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cause: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    organizer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feedback_summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photos_link: {
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
    tableName: 'volunteer_initiatives_esg',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return VolunteerInitiatives;
};
