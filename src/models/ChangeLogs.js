const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ChangeLogs = sequelize.define('ChangeLogs', {
    log_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entity_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entity_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    change_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    change_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    old_value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    new_value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_address: {
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
    tableName: 'change_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ChangeLogs;
};
