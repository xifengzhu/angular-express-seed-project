// index.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var handlebars = require('express-handlebars');

var database = require('./config/database');

mongoose.connect(database.url);

app.use(express.static("./client"));

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(methodOverride());

app.engine('.html', handlebars({layout: false, extname: '.html'}));
app.set('view engine', '.html');

require('./routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
