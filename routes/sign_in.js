module.exports.post = function(req, res) {
  console.log(req.body);
  var validation = require('../libs/validation/validation.js');
  var result 	 = validation(req.body.email, req.body.password);
  if (Object.keys(result).length == 0) {
    res.send({msg: ' '});
  } else {
    res.send({msg: 'email or login you write is incorrect'});
  }
}