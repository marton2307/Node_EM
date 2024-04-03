const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    logging: true,
});

const postgresDBConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a PostgreSQL establecida.');
    } catch (error) {
        console.error('Error al conectar a PostgreSQL:', error);
    }
};

module.exports = { sequelize, postgresDBConnect };
