module.exports.get = function(req, res) {
  var file_path = '/home/narek/documents/node_server/views/index.html';
  res.sendFile(file_path);
}
