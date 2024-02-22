const { Sequelize } = require('sequelize');

var database = 'restaurantDB';
var userName = 'postgres';
var password = '123456789';

const connection = new Sequelize(database, userName, password, {
    host: 'localhost',
    dialect: 'nombre de postman'
});

module.exports = connection;