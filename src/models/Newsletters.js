const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Newsletters = sequelize.define('Newsletters', {
    newsletter_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    send_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    content_summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    distribution_list: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    open_rate: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    click_rate: {
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
    tableName: 'internal_newsletters',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Newsletters;
};
