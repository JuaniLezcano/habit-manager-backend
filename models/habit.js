const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habit = sequelize.define('Habit', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  importance: {
    type: DataTypes.ENUM('Alta', 'Media', 'Baja'), // Campo enumerativo para la importancia
    allowNull: false,
  },
});

module.exports = Habit;
