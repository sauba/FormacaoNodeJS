const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const connection = new Sequelize('newproject', 'root', '!@Moresurf@!1', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
});

module.exports = connection;