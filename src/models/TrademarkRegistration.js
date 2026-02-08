const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrademarkRegistration = sequelize.define('TrademarkRegistration', {
    registration_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trademark_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    class_codes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    filing_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jurisdiction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    renewal_due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attorney_name: {
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
    tableName: 'trademark_registration',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TrademarkRegistration;
};
