const { httpError } = require('../helpers/handelError');
const userModel = require('../models/mongo/users');
const { sequelize } = require('../config/postgres');
const PostgresUser = require('../models/postgres/user');
const { QueryTypes } = require('sequelize');

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({});
        const usersAll = await sequelize.query("SELECT * FROM users", { type: QueryTypes.SELECT });
        res.send({ data: listAll, usersAll });
    } catch (e) {
        httpError(res, e);
    }
};

const createItem = async (req, res) => {
    try {
        const { name, age, email, telefono } = req.body;
        
        // Crear usuario en MongoDB
        const mongoUser = await userModel.create({ name, age, email });
        
        // Crear usuario en PostgreSQL
        const postgresUser = await PostgresUser.create({ name, age, email, telefono });
        
        // Enviar respuesta con ambos usuarios creados
        res.send({ mongoUser, postgresUser });
        
    } catch (e) {
        httpError(res, e);
    }
};

const updateItem = (req, res) =>{

}

const deleteItem = (req, res) =>{
    

}

module.exports = { getItems, deleteItem, createItem, updateItem}

