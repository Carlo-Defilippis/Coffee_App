require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const jwt = require('../backend/jwt')
require('./database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// use jwt auth to secure the api
app.use(jwt());

// API
app.use('/users', require('../models/users.controller'));

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// require('dotenv').config();
// const db = require("./models/products");
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path')
// require('./database');



// app.use(bodyParser.json());
// app.use(cors());
// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// const users = require('./api/users');
// app.use('/api/users', users);

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })


// // app.post("/submit", ({ body }, res) => {
// //   db.create(body)
// //     .then(dbUser => {
// //         res.redirect('/')
// //     })
    
// //     .catch(err => {
// //       res.json(err);
// //     });
// // });

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
//   })

// // app.get('/api/products', function (req, res) {
// //     db.find({})
// //     .sort({category: 1})
// //     .then(cb => {
// //         res.json(cb);
// //     })
// //     .catch(err => {
// //         res.status(400).json(err);
// //     })
// // })

// // app.get('/api/products/bagel', function (req, res) {
// //   db.find({category: "bagel"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/breakfast', function (req, res) {
// //   db.find({category: "breakfast"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/coffee', function (req, res) {
// //   db.find({category: "coffee"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/pastry', function (req, res) {
// //   db.find({category: "pastry"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/promo', function (req, res) {
// //   db.find({category: "promo"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/sandwiches', function (req, res) {
// //   db.find({category: "sandwiches"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/sides', function (req, res) {
// //   db.find({category: "sides"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })

// // app.get('/api/products/tea', function (req, res) {
// //   db.find({category: "tea"})
// //   .sort({product: 1})
// //   .then(cb => {
// //       res.json(cb);
// //   })
// //   .catch(err => {
// //       res.status(400).json(err);
// //   })
// // })


// // // posting user data to database
// // app.post('/user/signup', (req, res) => {
// //   // now we create a new user object with email and password and since we have body-parser which parses all data from the body to JSON format we request the data from email and password from body itself
// //   const user = new User({
// //       email: req.body.email,
// //       password: req.body.password
// //       // .save to save it to the database
// //   }).save((err, response) => {
// //       if(err) res.status(400).send(err)
// //       res.status(200).send(response)
// //   })
// // })

// // // login route
// // app.post('/user/login', (req,res) => {
// //   // checks whether the email is present or not
// //   User.findOne({'email': req.body.email}, (err, user) => {
// //       if(!user) res.json({message: "login failed, user not found"})

// //       // if user found we compare the passwords
// //       user.comparePassword(req.body.password, (err, isMatch) =>{
// //           if(err) throw err;
// //           if(!isMatch) return res.status(400).json({
// //               message: "Wrong Password"
// //           });
// //           res.status(200).send("Logged in successfully");
// //       })
// //   })
// // });

// // // delete user
// // app.post('/user/delete/:id', (req,res) => {
// //   User.findByIdAndDelete(req.params.id)
// //   .then(() => res.json('User deleted.'))
// //   .catch(err => res.status(400).json('Error: ' + err ));
// // });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });


