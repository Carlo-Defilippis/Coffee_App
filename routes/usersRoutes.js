// const { User } = require('../models/user');
// const router = require('express').Router();
// var logout = require('express-passport-logout');
// router.use(bodyParser.json());

// // posting user data to database
// router.post('/user/signup', (req, res) => {
//     // now we create a new user object with email and password and since we have body-parser which parses all data from the body to JSON format we request the data from email and password from body itself
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password
//         // .save to save it to the database
//     }, console.log("router post was hit in userRoutes: ", req.body.email, req.body.password)).save((err, response) => {
//         if (err) res.status(400).send(err.response)
//         res.status(200).send(response)
//     })
// })

// // login route
// router.post('/user/login', (req, res) => {
//     // checks whether the email is present or not
//     User.findOne({ 'email': req.body.email }, (err, user) => {
//         if (!user) res.json({ message: "login failed, user not found" })

//         // if user found we compare the passwords
//         user.comparePassword(req.body.password, (err, isMatch) => {
//             if (err) throw err;
//             if (!isMatch) return res.status(400).json({
//                 message: "Wrong Password"
//             });
//             res.status(200).send("Logged in successfully");
//         })
//     })
// });

// // a route to get all the users in the database
// router.get('/user', (req, res) => {
//     User.find()
//         .then(user => {
//             if (!user) {
//                 return res.status(404).end();
//             }
//             return res.status(204).end();
//         })
//         .catch(err => next(err));
// });

// // delete route
// router.delete('/user/delete/:id', (req, res) => {
//     // in this route we will delete the user based on their selection
//     User.findByIdAndDelete(req.params.id)
//         .then(() => res.json('User Deleted'))
//         .catch(err => res.status(400).json('User: ' + err));
// });

// // update the user
// router.update('/user/update/:id', (req, res) => {
//     // updates the user' login info if they need to 
//     User.findByIdAndUpdate(req.params.id)
//         .then(newUser => {
//             newUser.email = req.body.email;
//             newUser.password = req.body.password;
//         })

//     newUser.save()
//         .then(() => res.json('User updated!'))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

// // logout the user
// router.get('/logout', logout, function (req, res) {
//     req.logout();
//     req.flash('success', 'you have logged out of the router.');
//     // need to make sure if the we want to redirect them to the login page or something else?
//     res.redirect('/user/login');
// });


// module.exports = router;