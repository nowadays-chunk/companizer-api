const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeadNurturing = sequelize.define('LeadNurturing', {
    nurture_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lead_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activity_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    engagement_score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    campaign_step: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    content_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    response_received: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    next_action_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assigned_rep_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email_opened: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'lead_nurturing',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return LeadNurturing;
};
