var path  = require('path');
var Message = require('../models/message').Message;
var Users   = require('../models/user').User;

module.exports.get = function(req, res) {
  var time = req.query.lastTime;
  console.log('time type: ', typeof time);
  Message
    .find({
      //sender: 0,
      sendTime: {$lt: new Date(time)},

    },{
      sender:0,
      img_url:0,
      gender:0,
      _id:0
    })
    .limit(10)
    .sort('-sendTime')
    .exec(
      function(err, messages) {
        if (err) return console.log(err);
          array = [];
          var count=0;
        for(var i=0;i<messages.length;i++){
          if(array.length > 0){
            for(var j=0;j<array.length;j++){
              if(array[j] == messages[i].id ){
                count ++;
              }
            }
          }
          if(count == 0){
            array.push(messages[i].id);
            count == 0;
          }
        }
        Users.find({
          _id: {$in: array}
          },{
              password:0,
              nikname:0,
              email:0,
          })
        .exec(
          function(err, users) {
              if (err) return console.log(err);
              var a = [];
              //console.log('nnnnn',users);
              //console.log('vvvv',messages);
              for( var i= 0;i < users.length ;i++  ){
                    //console.log('mek',users[i]._id);
                    //console.log('erek',messages.length);
                for( var j= 0;j<messages.length;j++){
                  if(users[i]._id == messages[j].id ){
                    a.push({});
                    a[a.length-1].userdata = users[i];
                    a[a.length-1].message = messages[j].message;
                    a[a.length-1].sendTime = messages[j].sendTime;
                  }
                }
              }
            console.log('vvvv',a);
        	res.send({old_messages: a})
          }
        );
      }
    );
}







