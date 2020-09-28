const { User } = require('../models/user');

const router = require('express').Router();
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

// delete route
app.delete('/user/delete/:id', (req, res) => {
    // in this route we will delete the user based on their selection
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted'))
    .catch(err => res.status(400).json('User: ' + err));
});

// update the user
app.update('/user/update/:id' , (req,res) => {
    // updates the user' login info if they need to 
    User.findByIdAndUpdate(req.params.id)
    .then(newUser => {
        newUser.email = req.body.email;
        newUser.password = req.body.password;
    })

    newUser.save()
    .then(() => res.json('User updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = app;