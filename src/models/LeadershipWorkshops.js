const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeadershipWorkshops = sequelize.define('LeadershipWorkshops', {
    workshop_id: {
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
    facilitator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    duration_hours: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    max_attendees: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    registered_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    materials_link: {
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
    tableName: 'leadership_workshops',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeadershipWorkshops;
};
