const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CommunityInvestment = sequelize.define('CommunityInvestment', {
    investment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    initiative_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount_invested: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    partner_org: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beneficiaries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_description: {
      type: DataTypes.TEXT,
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
    tableName: 'community_investment',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CommunityInvestment;
};
