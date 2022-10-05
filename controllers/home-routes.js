// dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');

// homepage route
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

// login page route
router.get('/login', (req, res) => {
    res.render('login-page', {loggedIn: req.session.loggedIn});
})

// export
module.exports = router;