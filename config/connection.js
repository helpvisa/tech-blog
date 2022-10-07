// import sequelize constructor
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

// environment variables
let host;
let db;
let user;
let pass;
let port;

if (process.env.RDS_HOSTNAME) {
    host = process.env.RDS_HOSTNAME;
    db = process.env.RDS_DB_NAME;
    user = process.env.RDS_USERNAME;
    pass = process.env.RDS_PASSWORD;
    port = process.env.RDS_PORT;
} else {
    // store variables from dotenv
    host = 'localhost';
    db = process.env.DB_NAME;
    user = process.env.SQL_USER;
    pass = process.env.SQL_PASS;
    port = 3306;
}

// create a connection to the database
const sequelize = new Sequelize(db, user, pass, {
    host: host,
    dialect: 'mysql',
    dialectOptions: {
        ssl: 'Amazon RDS'
    },
    port: port
});

// export sequelize connection for use in other scripts
module.exports = sequelize;