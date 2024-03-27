const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;

        await mongoose.connect(DB_URI, {
            // Opciones adicionales pueden ir aquí, pero elimina las obsoletas
        });

        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
};

/* const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

const dbConnect = async () => {

    try {
        // Conexión a MongoDB
        const mongoDB_URI = process.env.MONGODB_URI;
        console.log("mongo",mongoDB_URI );

        await mongoose.connect(mongoDB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB establecida');

         // Conexión a PostgreSQL
         const postgresDB_URI = process.env.POSTGRES_URI;
         console.log("Postgres", postgresDB_URI);
         const sequelize = new Sequelize({
             dialect: 'postgres', // Especifica el dialecto de la base de datos
             host: 'localhost', // Especifica el host de la base de datos
             port: 5432, // Especifica el puerto de la base de datos
             username: 'postgres', // Especifica el nombre de usuario de la base de datos
             password: 'admin', // Especifica la contraseña de la base de datos
             database: 'tikee_node', // Especifica el nombre de la base de datos
             // Otros opciones como pool, logging, etc. pueden ser añadidas según sea necesario
         });
 
         // Prueba de conexión a PostgreSQL
         await sequelize.authenticate();
         console.log('Conexión a PostgreSQL establecida');
     } catch (error) {
         console.error('Error al conectar a la base de datos:', error.message);
     }
 }; */

module.exports= { dbConnect }

