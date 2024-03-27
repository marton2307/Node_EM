const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/postgres'); // Asegúrate de importar la instancia de Sequelize correctamente

// Define el modelo para la tabla users
const User = sequelize.define('userss', {
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }
}, {
    // Opciones adicionales pueden ir aquí, como el nombre de la tabla, etc.
});

// Sincronizar el modelo con la base de datos para crear la tabla
User.sync()
    .then(() => {
        console.log('Tabla de usuarios creada en PostgreSQL.');
    })
    .catch(error => {
        console.error('Error al crear la tabla de usuarios:', error);
    });

module.exports = userss;


