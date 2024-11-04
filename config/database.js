const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Almacena la base de datos en un archivo local
});

module.exports = sequelize;