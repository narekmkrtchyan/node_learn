module.exports.post = function(req, res) {
  console.log(req.body);
  //console.log('narekkkkk',req.body.emaile);
  var validation = require('../libs/validation.js');
  var result = validation(req.body.emaile, req.body.password, req.body.confirm_password, req.body.your_name, req.body.username);
  if (result == 'all') {
    res.send({msg: 'chisht en'});
  }else if(result == '!username') {
      res.send({msg: '!username'});
  }else if( result == '!your_name'){
      res.send({msg: '!your_name'});
  }else if( result == '!confirm_password'){
      res.send({msg: '!confirm_password'});
  } else if( result == '!password'){
      res.send({msg: '!password'});
  } else{
      res.send({msg: '!email'});
  }
}