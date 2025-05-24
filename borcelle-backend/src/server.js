const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const citaRoutes = require('./routes/citas'); // Lo crearemos después

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a DB
connectDB();

// Rutas
app.use('/api/citas', citaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));