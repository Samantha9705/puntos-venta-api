const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Conexión a MongoDB con MONGO_URI
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });

const puntosRoutes = require('./routes/puntos');
app.use('/api/puntos', puntosRoutes);
