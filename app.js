require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect: mongoDBConnect } = require('./src/config/mongo');
const { dbConnect: postgresDBConnect } = require('./src/config/postgres');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de tu aplicación
app.use('/', require('./src/routes'));

// Conexión a MongoDB
mongoDBConnect();

// Conexión a PostgreSQL
postgresDBConnect();

app.listen(PORT, () => {
    console.log('API lista por el puerto', PORT);
});