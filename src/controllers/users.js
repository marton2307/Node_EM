const { httpError } = require('../helpers/handelError');
const userModel = require('../models/mongo/users');
const sequelize = require('../config/postgres');

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
        const { name, age, email } = req.body;
        const resDetail = await userModel.create({ name, age, email });
        res.send({ data: resDetail });
    } catch (e) {
        httpError(res, e);
    }
};

const updateItem = (req, res) =>{

}

const deleteItem = (req, res) =>{
    

}

module.exports = { getItems, deleteItem, createItem, updateItem}

