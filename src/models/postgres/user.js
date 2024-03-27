const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/postgres');

const PostgresUser = sequelize.define('users', {
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
});

PostgresUser.sync()
    .then(() => {
        console.log('Tabla de usuarios creada en PostgreSQL.');
    })
    .catch(error => {
        console.error('Error al crear la tabla de usuarios en PostgreSQL:', error);
    });

module.exports = PostgresUser;
