var path = require('path');

module.exports.get = function(req, res) {
  var file_path = path.join(__dirname, '../views/index.html');
  res.sendFile(file_path);
}
