// import sequelize constructor
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

// store variables from dotenv
const db = process.env.DB_NAME;
const user = process.env.SQL_USER;
const pass = process.env.SQL_PASS;

// create a connection to the database
const sequelize = new Sequelize(db, user, pass, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

// export sequelize connection for use in other scripts
module.exports = sequelize;