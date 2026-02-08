const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AccessControls = sequelize.define('AccessControls', {
    control_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    system_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    permission_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    last_review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mfa_required: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'access_controls',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return AccessControls;
};
