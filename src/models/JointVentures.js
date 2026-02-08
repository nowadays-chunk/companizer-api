const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const JointVentures = sequelize.define('JointVentures', {
    jv_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    partner_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    venture_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    formation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dissolution_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    equity_split: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    capital_contribution: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    primary_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    governing_law: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    operating_agreement_url: {
      type: DataTypes.STRING,
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
    tableName: 'joint_ventures',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return JointVentures;
};
