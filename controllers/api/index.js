// loud routes
const router = require('express').Router();
const userRoutes = require('./user-routes'); // routes for user creation / login
const postRoutes = require('./post-routes'); // routes for post creation / editing
const commentRoutes = require('./comment-routes'); // routes for creating / editing comments

// use and export routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export
module.exports = router;