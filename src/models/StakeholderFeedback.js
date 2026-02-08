const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StakeholderFeedback = sequelize.define('StakeholderFeedback', {
    feedback_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stakeholder_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feedback_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date_received: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action_taken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    assigned_to: {
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
    tableName: 'stakeholder_feedback',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return StakeholderFeedback;
};
