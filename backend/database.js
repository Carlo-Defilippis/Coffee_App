const config = require('../config.json')
const mongoose = require('mongoose');
const connection = "mongodb+srv://maurya512:enph739ektA@cluster0.vufo2.mongodb.net/coffeeshopusersss?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI,{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then((result) => result)
    .catch(err => console.log(err));

    mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user')
};