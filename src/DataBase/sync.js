const connection = require('./connection');

//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/departments');
const city = require('../Models/city');

//JSON
const departmentjson = require('./json_files/departmentjson');
const cityjson = require('./json_files/cityjson');


function sync() {
    //Foreign Key restaurant - product
    restaurant.hasMany(product, {
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant, {
        foreignKey: 'restaurantId'
    });

    //Foreign Key department - city

    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department, {
        foreignKey: 'departmentId'
    })

    //Foreign Key City - restaurant

    city.hasMany(restaurant, {
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city, {
        foreignKey: 'cityId'
    });

    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();