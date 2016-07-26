module.exports.get = function(req, res) {
  var file_path = '/home/narek/documents/node/node_learn/views/index.html';
  res.sendFile(file_path);
}
