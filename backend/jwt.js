const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../models/user.service');

module.exports = jwt;


// function jwt() {
//     var secret = process.env.SECRET
//     console.log("This is the secret shhhhhh: ",secret)
//     return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
//         path: [
//             // public routes that don't require authentication
//             '/',
//             '/login',
//             '/register',
//             '/users/authenticate',
//             '/users/register'
//         ]
//     });
// }

// async function isRevoked(req, payload, done) {
//     const user = await userService.getById(payload.sub);
    
//     // revoke token if user no longer exists
//     if (!user) {
//         console.log('You are not a user!')
//         return done(null, true);
//     }
    
//     done();
// };