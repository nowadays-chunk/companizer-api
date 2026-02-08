const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MentorshipPrograms = sequelize.define('MentorshipPrograms', {
    mentorship_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mentor_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mentee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    meeting_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    goals: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
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
    tableName: 'mentorship_programs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return MentorshipPrograms;
};
