const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IpLitigation = sequelize.define('IpLitigation', {
    litigation_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_asset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opposing_party: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    court: {
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    legal_counsel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget_spent: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    outcome: {
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
    tableName: 'ip_litigation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return IpLitigation;
};
