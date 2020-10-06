const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            'https://coffee-app-group6.herokuapp.com/',
            'https://coffee-app-group6.herokuapp.com/Login',
            'https://coffee-app-group6.herokuapp.com/Register',
            'https://coffee-app-group6.herokuapp.com/users/authenticate',
            'https://coffee-app-group6.herokuapp.com/users/register',
            '/users/register',
            '/users/authenticate',
            '/register',
            '/Register',
            '/Login',
            '/login',
            '/'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};