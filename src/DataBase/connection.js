const { Sequelize } = require('sequelize');

var database = 'restaurantDB';
var userName = 'postgres';
var password = 'Arboledas0';

const connection = new Sequelize(database, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;