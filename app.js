'use strict';
const express         = require('express');
const errorHandler    = require('errorhandler');
const figlet          = require('figlet');
const path            = require('path');
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const favicon         = require('serve-favicon');
const app             = express();
// const log             = require('./libs/log')(module);

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

//

app.get('/', function(req, res) {
  var file_path = __dirname + '/views/index.html';
  res.sendFile(file_path);
});


app.post('/test', function(req, res) {
  console.log(req.body);
  var validation = require('./libs/validation.js');
  var result = validation(req.body.email,req.body.password);
  if (result == 'all') {
    res.send({msg: 'erkusnel chisht en'});
  } else {
    if (result == 'email!password') {
      res.send({msg: 'mail-@ jisht a, password-@ sxal'});
    } else {
      if (result == '!emailpassword') {
        res.send({msg: 'mail-@ sxal a, password-@ jisht'});
      } else {
        res.send({error: 'mail-@ sxal a, password-@ sxal a'});
      }
    }
  }
});
//
app.get('/test',function(req,res) {
  var now = new Date();
  var hours = now.getHours();
  var minut = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();
  var send_hours = (hours-req.query.hourss);
  var send_minut = (minut-req.query.minutt);
  var send_seconds = (seconds-req.query.secondss);
  if(miliseconds-req.query.milisecondss>0){
    var send_miliseconds = (miliseconds-req.query.milisecondss);
  }
  else {
    var send_miliseconds =((1000+parseInt(miliseconds))-parseInt(req.query.milisecondss));
    send_seconds--;  
  }
  console.log(hours ,"",minut,"",seconds,"",miliseconds);
  console.log(send_hours," ",send_minut," ",send_seconds," ",send_miliseconds);
  res.send({msg: send_miliseconds});
})
//

const http   = require('http');
const server = http.createServer(app);

server.listen(3000, function() {
  figlet.text('connect', function(err, date) {
    if (err) {
      return console.log(err);
    } else {
      console.log(date);
    }
  });
});