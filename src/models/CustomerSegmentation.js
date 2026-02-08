const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerSegmentation = sequelize.define('CustomerSegmentation', {
    segment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    segment_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    criteria: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    customer_count: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    average_ltv: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    marketing_strategy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_dynamic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    region_filter: {
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
    tableName: 'customer_segmentation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return CustomerSegmentation;
};
