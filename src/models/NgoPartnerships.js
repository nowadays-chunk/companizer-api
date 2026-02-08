const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const NgoPartnerships = sequelize.define('NgoPartnerships', {
    partnership_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ngo_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_person: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partnership_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    annual_contribution: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    objectives: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    impact_report_received: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    renewal_date: {
      type: DataTypes.DATE,
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
    tableName: 'ngo_partnerships',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return NgoPartnerships;
};
