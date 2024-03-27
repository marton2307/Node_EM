const { Sequelize } = require('sequelize');

const dbConnect = async () => {
    try {
        // Conexión a PostgreSQL
        const postgresDB_URI = process.env.POSTGRES_URI;
        console.log("Postgres", postgresDB_URI);
        const sequelize = new Sequelize(postgresDB_URI, {
            dialect: 'postgres', // Especifica el dialecto de la base de datos
            // Otros opciones como host, puerto, usuario, contraseña, etc., serán extraídas de la URI de conexión
        });

        // Prueba de conexión a PostgreSQL
        await sequelize.authenticate();
        console.log('Conexión a PostgreSQL establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
};

module.exports= { dbConnect }
