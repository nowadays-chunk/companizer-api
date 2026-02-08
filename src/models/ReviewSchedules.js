const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReviewSchedules = sequelize.define('ReviewSchedules', {
    schedule_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    review_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scheduled_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
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
    tableName: 'review_schedules',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ReviewSchedules;
};
