var path  = require('path');
var Message = require('../models/message').Message;

module.exports.get = function(req, res) {
  var time = req.query.lastTime;
  console.log('time type: ', typeof time);
  Message
    .find({
      sendTime: {$lt: new Date(time)}
    })
    .limit(3)
    .sort('-sendTime')
    .exec(
      function(err, messages) {
        if (err) return console.log(err);
        
        res.send({old_messages: messages})
      }
    );
}