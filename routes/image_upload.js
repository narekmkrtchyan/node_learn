const multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
              .single('myimage');


module.exports.post = function(req, res) {
  
  res.redirect('/user');
}
