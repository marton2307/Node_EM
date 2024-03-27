const { httpError } = require('../helpers/handelError');
const userss = require('../models/mongo/userss'); // Asegúrate de importar el modelo correcto para PostgreSQL

const getItems = async (req, res) => {
    try {
        const listAll = await userss.findAll();
        res.send({ data: listAll });
    } catch (error) {
        httpError(res, error);
    }
};

const getItem = (req, res) => {
    // Lógica para obtener un único elemento de la base de datos
};

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const resDetail = await userss.create({ name, age, email });
        res.send({ data: resDetail });
    } catch (error) {
        httpError(res, error);
    }
};

const updateItem = (req, res) => {
    // Lógica para actualizar un elemento en la base de datos
};

const deleteItem = (req, res) => {
    // Lógica para eliminar un elemento de la base de datos
};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
