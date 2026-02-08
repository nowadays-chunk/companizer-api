const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ResearchProposals = sequelize.define('ResearchProposals', {
    proposal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submitter_id: {
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
    research_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    budget_requested: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duration_months: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    collaborators: {
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
    tableName: 'research_proposals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ResearchProposals;
};
