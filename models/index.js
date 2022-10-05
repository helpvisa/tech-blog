// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// associations
// user to post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// comment to post
Comment.belongsTo(Post, {
    onDelete: 'cascade',
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// comment to user
Comment.belongsTo(User, {
    onDelete: 'cascade',
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// export
module.exports = {User, Post, Comment};