// dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const {Post, User, Comment} = require('../models');

// dash main page route
router.get('/', auth, (req, res) => {
    // if user is not logged in kicked them to login page
    // get user's post data
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'text',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                ]
            }
        ]
    })
    .then(data => {
        // map and serialize
        const posts = data.map(post => post.get({plain: true}));
        // render page and pass in data
        res.render('dash', {posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add post page
router.get('/new', auth, (req, res) => {
    res.render('add-post', {loggedIn: req.session.loggedIn});
});

// export
module.exports = router;