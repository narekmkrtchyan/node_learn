'use strict';
const express         = require('express');
const figlet          = require('figlet');
const path            = require('path');
const mongoose        = require('./libs/db/mongoose');
const bodyParser      = require('body-parser');
const expressSession  = require('express-session');
const cookieParser    = require('cookie-parser');
const favicon         = require('serve-favicon');
const config          = require('./config');
const app             = express();
const Message         = require('./models/message').Message;

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));



// "session": "start"
const sessionStore = require('./libs/db/sessionStore');
mongoose.createConnection(
 config.get('mongoose:uri'),
 config.get('mongoose:options')
);
app.use(expressSession({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  resave: true,
  saveUninitialized: true,
  store: sessionStore,
}));
// "session": "end"



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
var io = require('socket.io').listen(server);
io.set('origins','localhost:*');
io.sockets.on('connection',function(socket){
  socket.on('send_message', function(data) {
    //pti haskananq ove
    var message = new  Message({
      message:data.message,
      sendTime:new Date(),
      sender:'pix',
    });
    message.save(function(err){
      if(err) return console.log(err);  
      socket.broadcast.emit('new_message', {message: data.message});
    });
  })
});
