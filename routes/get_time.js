module.exports.get = function(req, res) {
  var now = new Date();
  var hours = now.getHours();
  var minut = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();
  var send_hours = (hours-req.query.hourss);
  var send_minut = (minut-req.query.minutt);
  var send_seconds = (seconds-req.query.secondss);
  if(miliseconds-req.query.milisecondss>0){
    var send_miliseconds = (miliseconds-req.query.milisecondss);
  }
  else {
    var send_miliseconds =((1000+parseInt(miliseconds))-parseInt(req.query.milisecondss));
    send_seconds--;  
  }
  console.log(hours ,"",minut,"",seconds,"",miliseconds);
  console.log(send_hours," ",send_minut," ",send_seconds," ",send_miliseconds);
  res.send({msg: send_miliseconds});
}