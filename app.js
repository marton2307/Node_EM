/* require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app =express()
const {dbConnect} = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/api/1.0', require('./app/routes'))
dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto', PORT);
}) */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect: mongoDBConnect } = require('./config/mongo');
const { dbConnect: postgresDBConnect } = require('./config/postgres'); // Importa la función dbConnect de tu archivo postgres.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de tu aplicación
app.use('/api/1.0', require('./app/routes'));

// Conexión a MongoDB
mongoDBConnect();

// Conexión a PostgreSQL
postgresDBConnect();

app.listen(PORT, () => {
    console.log('API lista por el puerto', PORT);
});


