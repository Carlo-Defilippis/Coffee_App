console.log('this file was touched')
// create a userSchema with firstname, lastname, email and password that user  will enter. 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// require bcrypt 
const bcrypt = require('bcrypt');
const { urlencoded } = require('body-parser');
let SALT = 10;

// Hashing the password before saving it to the database
// we use a predefined function called "pre" which will let the userSchema to hash the password before moving it to the database
userSchema.pre('save', function(next){
    // we refer to user body stored inside of user in our signup route
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(SALT, function(err,salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err,hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

// comparing the passwords
userSchema.methods.comparePassword = function(candidatePwd, checkPwd) {
    bcrypt.compare(candidatePwd, this.password, function(err, isMatch){
        checkPwd(null, isMatch)
    })
}
// create an instance of mongoose model and we assign it to User to export it
const User = mongoose.model('User', userSchema);

module.exports = { User };