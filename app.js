'use strict';
const express         = require('express');
const errorHandler    = require('errorhandler');
const figlet          = require('figlet');
const path            = require('path');
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const favicon         = require('serve-favicon');
const config          = require('./config');
const app             = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// routes
require('./routes')(app);

const http   = require('http');
const server = http.createServer(app);

server.listen(process.env.PORT || config.get('port'), function() {
  figlet.text('connect', function(err, date) {
    if (err) {
      return console.log(err);
    } else {
      console.log(date);
    }
  });
});