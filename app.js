const express = require('express');
const sequelize = require('./config/database');
const apiRoutes = require('./routes/api');
require('./models/relation'); // Importa los modelos y las relaciones

// Sincroniza la base de datos
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
// Rutas de la API
app.use('/api', apiRoutes);
