const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../models/user.service');



function jwt() {
    var secret = config.secret
    console.log("This is the secret shhhhhh: ",secret)
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
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
        console.log('You are not a user!')
        return done(null, true);
    }
    
    done();
};
module.exports = jwt;