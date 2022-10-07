// import sequelize constructor
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

// create a connection to the database
// init sequelize var
let sequelize;

// check if a JawsDB URL is active in the .env
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // store variables from dotenv
    const db = process.env.DB_NAME;
    const user = process.env.SQL_USER;
    const pass = process.env.SQL_PASS;

    sequelize = new Sequelize(db, user, pass, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// export sequelize connection for use in other scripts
module.exports = sequelize;