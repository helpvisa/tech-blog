// import sequelize constructor
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

// environment variables
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // environment variables
    const db = process.env.DB_NAME;
    const user = process.env.SQL_USER;
    const pass = process.env.SQL_PASS;
    // create a connection to the database
    sequelize = new Sequelize(db, user, pass, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}



// export sequelize connection for use in other scripts
module.exports = sequelize;