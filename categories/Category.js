const Sequelize = require("sequelize");
const connection = require("../database/connectDatabase");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Category;