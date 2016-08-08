var Users   = require('../models/user').User;
var Message = require('../models/message').Message;

module.exports.get = function(req, res) {
  
  
  Users.findOne({
    _id: req.session.user
  }, {
    name: 1,
    nikname: 1,
    gender:1,
    _id: 0,    
  }, function(err, user) {
    if (err) return console.log(err);

    if (user) {
      Message
        .find()
        .limit(50)
        .exec(function(err,messages){
          if(err) return console.log(err);
          res.render('user', {
            user_name:    user.name,
            user_nikname: user.nikname,
            user_age:     23,
            user_gender:  user.gender,
            messages: messages
          });
          
        })



    } else {
      res.end('error!!!!!!!!!!');
    }
  })
}
