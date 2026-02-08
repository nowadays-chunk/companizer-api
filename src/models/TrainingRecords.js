const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrainingRecords = sequelize.define('TrainingRecords', {
    record_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    program_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountable_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    score: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificate_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    e: {
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
    tableName: 'hr_training_records',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return TrainingRecords;
};
