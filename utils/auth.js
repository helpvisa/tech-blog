const auth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/'); // change to redirect to login route
    } else {
        next();
    }
};

module.exports = auth;