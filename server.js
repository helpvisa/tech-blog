// dependencies / imports
const dotenv = require('dotenv').config();
// import session secret from .env
const secret = process.env.SESSION_SECRET;
// express / sequelize
const express = require('express');
const routes = require('./controllers'); // import from index.js in controllers folder
const sequelize = require('./config/connection'); // import previously established connection
const path = require('path');
const session = require('express-session');

// session storage in database with sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// handlebars template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({}); // create handlebars engine

// setup session
const sess = {
    secret: secret,
    cookie: {
        maxAge: 30 * 60 * 1000 // session expires after 30 minutes
    },
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// initialize server
const app = express();
const PORT = process.env.PORT || 3001;

// setup template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); // setup public folder
app.use(session(sess)); // use our express-session

// enable our imported routes
app.use(routes);

// sync to db and start server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listen server running on port ${PORT}.`));
});