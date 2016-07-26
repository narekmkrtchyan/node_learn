const User = require('../models/user').User;

module.exports.post = function(req, res) {
  console.log(req.body);

  var validation = require('../libs/validation.js');
  var data       = req.body;
  var result = validation(data.emaile, data.password, data.confirm_password,
                          data.your_name, data.username);

  if (Object.keys(result).length == 0) {
    var new_user = new User(data);
    new_user.save(function(err) {
      if (err) return console.log(err);
      console.log('new user is a saved');
      res.send({msg: 'sfgh'});
    });
  } else {
    res.send({error: result});
  }
}
