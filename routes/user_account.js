var Users   = require('../models/user').User;
var Message = require('../models/message').Message;

module.exports.get = function(req, res) {
  
  
  Users.findOne({
    _id: req.session.user
  }, {
    name: 1,
    nikname: 1,
    gender:1,
    img_url:1,
    _id: 0,    
  }, function(err, user) {
    if (err) return console.log(err);

    if (user) {
      Message
        .find()
        .sort('-sendTime')
        .limit(50)
        .exec(function(err,messages){
          //console.log('asas',messages);
          messages.reverse();
          if(err) return console.log('dasfa',err);
          res.render('user', {
            user_name:    user.name,
            user_nikname: user.nikname,
            user_age:     23,
            user_gender:  user.gender,
            img_url:      user.img_url,
            messages: messages
          });
          
        })
    } else {
      res.end('error!!!!!!!!!!');
    }
  })
}
