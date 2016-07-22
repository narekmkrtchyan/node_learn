module.exports.post = function(req, res) {
  console.log(req.body);
  var validation = require('../libs/validation.js');
  var result = validation(req.body.email,req.body.password);
  if (result == 'all') {
    res.send({msg: 'erkusnel chisht en'});
  } else {
    if (result == 'email!password') {
      res.send({msg: 'mail-@ jisht a, password-@ sxal'});
    } else {
      if (result == '!emailpassword') {
        res.send({msg: 'mail-@ sxal a, password-@ jisht'});
      } else {
        res.send({error: 'mail-@ sxal a, password-@ sxal a'});
      }
    }
  }
}