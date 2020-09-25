const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mlab config url
const MONGO_URL = "mongodb+srv://maurya512:enph739ektA@cluster0.vufo2.mongodb.net/coffeeshopusers?retryWrites=true&w=majority";
const app = express();

// connecting to the mongo database
mongoose.connect(MONGO_URL).then(()=> console.log("db connected"))
.catch(err => console.log(err));

// importing the models so we can use it
const { User } = require('./models/user');

// convert the data body to json format
app.use(bodyParser.json());

// posting user data to database
app.post('/user/signup', (req, res) => {
    // now we create a new user object with email and password and since we have body-parser which parses all data from the body to JSON format we request the data from email and password from body itself
    const user = new User({
        email: req.body.email,
        password: req.body.password
        // .save to save it to the database
    }).save((err, response) => {
        if(err) res.status(400).send(err)
        res.status(200).send(response)
    })
})

// login route
app.post('/user/login', (req,res) => {
    // checks whether the email is present or not
    User.findOne({'email': req.body.email}, (err, user) => {
        if(!user) res.json({message: "login failed, user not found"})

        // if user found we compare the passwords
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(err) throw err;
            if(!isMatch) return res.status(400).json({
                message: "Wrong Password"
            });
            res.status(200).send("Logged in successfully");
        })
    })
});
// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
});

