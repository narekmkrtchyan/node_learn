var path = require('path');
var Users = require('../models/user').User;

module.exports.post = function(req, res) {

  console.log(req.body);

  var validation = require('../libs/validation/validation.js');
  var result   = validation(req.body.email, req.body.password);

  if (Object.keys(result).length == 0) {
    Users.find({
      email: req.body.email
    }, function(err, user) {
      if (err) return console.log(err);
      console.log(user);

      if (user.length == 0) {
        res.send({error: 'tenc user chka'});
      } else {
        res.send({msg: 'success'})      
      }
    });
  } else {
    res.send({error: 'email or login you write is incorrect'});
  }
}
