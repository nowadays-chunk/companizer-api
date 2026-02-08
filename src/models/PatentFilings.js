const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PatentFilings = sequelize.define('PatentFilings', {
    filing_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    patent_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    application_number: {
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
    attorney_ref: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    patent_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grant_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cost_to_date: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    ype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    multiline: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rows: {
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
    tableName: 'patent_filings',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return PatentFilings;
};
