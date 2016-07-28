var Users = require('../models/user').User;


module.exports.get = function(req, res) {
  
  Users.findOne({
    _id: req.session.user
  }, {
    name: 1,
    nikname: 1,
    _id: 0,    
  }, function(err, user) {
    if (err) return console.log(err);

    if (user) {
      res.render('user', {
        user_name:    user.name,
        user_nikname:   user.nikname,
        user_age:     23
      });
    } else {
      res.end('error!!!!!!!!!!');
    }
  })
}
