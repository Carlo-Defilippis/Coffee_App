const config = require('../config.json')
const mongoose = require('mongoose');
const connection = "mongodb+srv://maurya512:enph739ektA@cluster0.vufo2.mongodb.net/coffeeshopusersss?retryWrites=true&w=majority";

mongoose.connect(connection,{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then((result) => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user')
};