const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { urlencoded } = require('body-parser');

const userSchema = new Schema({
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
    },
    createddate: {
        type: Date,
        default: Date.now
    }
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

// create a userSchema with email and password that user we'll enter. 

// let SALT = 10;

// Hashing the password before saving it to the database
// we use a predefined function called "pre" which will let the userSchema to hash the password before moving it to the database
// userSchema.pre('save', function (next) {
//     // we refer to user body stored inside of user in our signup route
//     var user = this;

//     if (user.isModified('password')) {
//         bcrypt.genSalt(SALT, function (err, salt) {
//             if (err) return next(err);

//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) return next(err);
//                 user.password = hash;
//                 next();
//             })
//         })
//     } else {
//         next();
//     }
// })

// // comparing the passwords
// userSchema.methods.comparePassword = function (candidatePwd, checkPwd) {
//     bcrypt.compare(candidatePwd, this.password, function (err, isMatch) {
//         checkPwd(null, isMatch)
//     })
// }
// // create an instance of mongoose model and we assign it to User to export it

module.exports = mongoose.model("User", userSchema, "users")