const Message         = require('../models/message').Message;
var   log             = require('../libs/log')(module);
var   cookie          = require('cookie');
var   connect         = require('connect');
var   async           = require('async');
var   config          = require('../config');
var   sessionStore    = require('../libs/db/sessionStore');
var   User            = require('../models/user').User;


module.exports = function(server){
  var io = require('socket.io').listen(server);
  io.set('origins','localhost:*');
  io.set('logger',log);

  // io.set('authorization', function(handshake,callback){
  //   async.waterfall([
  //     function(callback){

  //       handshake.cokies=cokie.parse(handshake.headers.cokie || '');
  //       var sidCookie = handshake.cokies[config.get('session:key')];
  //       var sid = connect.utils.parseSignedCookie(sidCookie,config.get('session:secret'));

  //       LoadSession(sid,callback);

  //     },
  //     function(session,callback){
  //       if(!session){
  //         callback(console.log(401,"No session"));
  //       }
  //       handshake.session=session;
  //       LoadUser(session,callback);
  //     },

  //     function(user,callback){
  //       if(!user){
  //         callback(console.log(403,"Anonymous session may not connect")); 
  //       }
  //       handshake.user=user;
  //       callback(null);
  //     }

  //   ],function(err){
  //     if(!err){
  //       return callback(null,true);
  //     }
  //     if(err ){
  //       return callback(null,false);
  //     }

  //     callback(err);
  //   });
  // });


  io.sockets.on('connection',function(socket){

    // var username =socket.handshake.user.get('username');
    // socket.broadcast.emit('join',username);

    //console.log('sddddddddddddddd',username);
    socket.on('send_message', function(data,cb) {
      console.log('data');
      var message = new  Message({
        message:data.message,
        sendTime:new Date(),
        sender:'pix',
      });
      message.save(function(err){
        if(err) return console.log(err);  
        socket.broadcast.emit('new_message', {message: data.message});
        cb('123');
      });
    })
  });
}