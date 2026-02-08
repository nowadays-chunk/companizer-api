const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PatentManagement = sequelize.define('PatentManagement', {
    patent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    innovation_id: {
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
    filling_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    filing_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inventors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jurisdiction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    attorney_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost_incurred: {
      type: DataTypes.DECIMAL(15, 2),
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
    tableName: 'patent_management_ihc',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PatentManagement;
};
