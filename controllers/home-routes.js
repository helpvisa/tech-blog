// dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const {Post, User, Comment} = require('../models');

// homepage route
router.get('/', (req, res) => {
    // get post data to render to homepage
    Post.findAll({
        attributes: [
            'id',
            'title',
            'text',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id'],
            }
        ]
    })
    .then(data => {
        // map posts and serialize
        const posts = data.map(post => post.get({plain: true}));
        // render page and pass in posts
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login page route
router.get('/login', (req, res) => {
    res.render('login-page', {loggedIn: req.session.loggedIn});
});

// single post route
router.get('/post/:id', auth, (req, res) => {
    // get single post data
    // get post data to render to homepage
    Post.findOne({
        where: {
            id: req.params.id
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
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'text',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(data => {
        // map posts and serialize
        const post = data.get({ plain: true });
        // render page and pass in posts
        res.render('post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export
module.exports = router;