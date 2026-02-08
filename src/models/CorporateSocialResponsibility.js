const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CorporateSocialResponsibility = sequelize.define('CorporateSocialResponsibility', {
    csr_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    program_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    focus_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget_allocated: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    start_year: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    program_manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partners: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    goals: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    achievements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ype: {
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
    tableName: 'environmental_social_governance_csr',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CorporateSocialResponsibility;
};
