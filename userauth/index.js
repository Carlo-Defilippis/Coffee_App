// require express and create our express app by calling express()
const express = require('express');
const app = express();

app.use(express.static(__dirname));

// helps us parse the body of our requests.
const bodyParser = require('body-parser');
// to save the session cookie
const expressSession = require('express-session')({
    // configuring the express-session with "secret", "resave", "saveUnitialized"
    secret: 'secret',
    resave: false,
    saveUnitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession);

const port = process.env.port || 3000;
app.listen(port, () => console.log('App listening on port ' + port));

// require passport and initialize it along with its session authentication middleware, directly inside our Express app
const passport = require('passport');
 
app.use(passport.initialize());
app.use(passport.session());

// configure mongoose 
// require the previously installed packages
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// connect to our database using mongoose.connect and give it the path to our database
mongoose.connect('mongodb://localhost/DemoDB', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;
// create userDetail with username and password fields
const userDetail = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

// we add passportLocalMongoose as a plugin to our Schema
userDetail.plugin(passportLocalMongoose);
const userDetails = mongoose.model('userInfo',userDetail,
'userInfo');

// implementing local authentication
// first we make passport use the local strategy by calling createStrategy()
passport.use(userDetails.createStrategy());
// Then we use serialize and deserialize callbacks
// serialize will be invoked on authentication, and its job is to serialize the user instance with the information we pass on it and store it in the session via a cookie
passport.serializeUser(userDetails.serializeUser());
// deserialize will be invoked every subsequent request to deserialize the instance, providing it the unique cookie identifier as a "credential"
passport.deserializeUser(userDetails.deserializeUser());

// we create some routes
// requiring connect-ensure-login
const connectEnsureLogin = require('connect-ensure-login');

// a post route to request to the /login path. inside here we use the passport.authenticate method, which attempts to authenticate with the strategy it receicves as its first parameter - in this case local
app.post('/login', (req,res,next) => {
    passport.authenticate('local',(err,user,info) => {
        if(err) {
            return next(err);
        }

        if(!user) {
            return res.redirect('/login?info=' + info);
        }

        req.logIn(user, function(err) {
            if(err) {
                return next(err);
            }

            return res.redirect('/');
        });
    })(req, res, next);
});

app.get('/login', (req,res) => res.sendFile('html/login.html', {root: __dirname}));

app.get('/',connectEnsureLogin.ensureLoggedIn(),(req,res) => res.sendFile('html/index.html', {root: __dirname}));

app.get('/private', connectEnsureLogin.ensureLoggedIn(),(req,res)=> res.sendFile('html/private.html', {root: __dirname}));

app.get('/user', connectEnsureLogin.ensureLoggedIn(),(req,res) => res.send({user: req.user}));

userDetails.register({username:'paul', active: false}, 'paul');
userDetails.register({username:'jay', active: false}, 'jay');
userDetails.register({username:'roy', active: false}, 'roy');