module.exports.post = function(req, res) {
  console.log(req.body);
  var validation = require('../libs/validation.js');
  var data = req.body;
  var result = validation(data.emaile, data.password, data.confirm_password, data.your_name, data.username);
  if (Object.keys(result).length == 0) {
    res.send({msg: 'lriv jisht'});
  } else {
    res.send({error: result});
  }
}