const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect:'mariadb',
    host:'localhost',
    database:'express',
    username:'root',
    password:'LegendisM1384',
});

module.exports = sequelize;