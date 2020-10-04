const mongoose = require('mongoose');
const connection = "mongodb+srv://maurya512:enph739ektA@cluster0.vufo2.mongodb.net/coffeeshopuserss?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then((result) => console.log("Database Connected Successfully", result))
    .catch(err => console.log(err));
