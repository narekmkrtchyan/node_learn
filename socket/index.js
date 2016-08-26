const Message         = require('../models/message').Message;
var   log             = require('../libs/log')(module);
var   cookie          = require('cookie');
var   connect         = require('connect');
var   async           = require('async');
var   config          = require('../config');
var   sessionStore    = require('../libs/db/sessionStore');
var   User            = require('../models/user').User;
const cookieParser    = require('cookie-parser');


module.exports = function(server) {
  var io = require('socket.io').listen(server);
  io.set('origins', 'localhost:*');
  var userDate = {};
  //io.set('logger',log);
  // 
  io.set('authorization', function(handshake, callback) {
    handshake.cookie  =   cookie.parse(handshake.headers.cookie || '');
    var sidCookie     =   handshake.cookie[config.get('session:key')];
    var sid = cookieParser.signedCookie(sidCookie, config.get('session:secret'));
    // console.log('aaaaaaaaaa',sid);
    sessionStore.load(sid, function(err, session) {
      if(err) return next(err);
      if(arguments.length == 0) return new HttpError(401, 'no session'); //test
      if(!session) {
        return console.log(401, 'no session');
      }
      handshake.session = session;
      if(!session.user) {
        log.debug("session anonymos");
        return console.log(500, 'server problem');
      };
      User.findOne({
        _id: session.user
      }, function(err, user) {
        if(!user) {
          log.debug('anonymos session');
          return next(500, 'anonymos session');
        };
        handshake.user = user;
        //console.log('bbb',userDate);
        userDate.user = user;
        callback(null, user);
      });
      //console.log('ssss',userDate)
    });
  });

io.sockets.on('connection',function(socket){
    var id       = userDate.user._id;
    var img_url  = userDate.user.img_url;
    var gender   = userDate.user.gender
    var username = userDate.user.name;
    socket.broadcast.emit('join', username,gender,img_url);

    socket.on('send_message', function(data,cb) {
      console.log('data');
      var message = new  Message({
        message:data.message,
        sendTime:new Date(),
        sender:username,
        id:id,
        gender:gender,
        img_url:img_url,
      });
      message.save(function(err){
        if(err) return console.log(err);  
        socket.broadcast.emit('new_message', {message: data.message, username: username,gender:gender,img_url:img_url});
      });
    })
  });
}
