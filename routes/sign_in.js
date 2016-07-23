module.exports.post = function(req, res) {
  console.log(req.body);
  var validation = require('../libs/validation.js');
  var result = validation(req.body.email, req.body.password);
  if (Object.keys(result).length == 0) {
    res.send({msg: 'sax jisht a'});
  } else {
    res.send({msg: 'mi ban sxal a'});
  }
}