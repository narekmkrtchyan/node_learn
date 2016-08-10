const User = require('../models/user').User;

module.exports.post = function(req, res) {

  console.log(req.body);

  var validation = require('../libs/validation/validation');
  var data       = req.body;
  var result = validation(data.email, data.password, data.confirm_password,
                          data.name, data.nikname, data.gender);
  console.log('aaaaaaa',result);
  if (Object.keys(result).length == 0) {
    console.log(data);

    var new_user = new User(data);
    // TODO: Stugi vor nuyn mail-ov mard chlini

    User.findOne({
      email: data.email
    }, function(err, user) {
      if (err) return console.log(err);
      console.log(user);

      if (!user) {
        new_user.save(function(err) {
          if (err) return console.log(err);
          console.log('new user is a saved');
          res.send({msg: 'user saved!'});
        });
      } else {
        res.send({msg: 'email duplikat'})  ;    
      }
    });
  } else {
    res.send({error: result});
  }
}
