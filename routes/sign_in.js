var path  = require('path');
var Users = require('../models/user').User;

module.exports.post = function(req, res) {

  var validation = require('../libs/validation/validation.js');
  var result   = validation(req.body.email, req.body.password);

  if (Object.keys(result).length == 0) {
    Users.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) return console.log(err);

      if (!user) {
        res.send({error: 'tenc user chka'});
      } else {
        req.session.user = user._id;
        req.session.save(function(err) {
          if(err) return console.log(err);
          res.send({msg: 'success'})      
        });
      }
    });
  } else {
    res.send({error: 'email or login you write is incorrect'});
  }
}
