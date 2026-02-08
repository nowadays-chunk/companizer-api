const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OfferLetters = sequelize.define('OfferLetters', {
    offer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicant_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    offer_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salary: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document_url: {
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
    tableName: 'offer_letters',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return OfferLetters;
};
