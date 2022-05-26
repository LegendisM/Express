const { DataTypes } = require('sequelize');
const database = require('../database/database');

const Todo = database.define("Todo",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text:{
        type: DataTypes.STRING,
        allowNull: false
    },
    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull:false
    }
});

module.exports = Todo;