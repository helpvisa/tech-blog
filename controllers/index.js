// import router from sub-routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// use and export
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// wildcard; displays 404 if page not found
router.use((req, res) => {
    res.status(404).end();
});

// export routes
module.exports = router;