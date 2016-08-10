console.log('%c Narek skazal Ostanavites suki!!!!!!!!', 'color: red; font-size: 60px');

setTimeout(
  function() {
    $("#area")
      .animate(
        {
          scrollTop: $('#area').prop("scrollHeight")
        }, 2500
      );
  }, 300
);  

$('.img_chat').click(function() {
  $('.change_image').addClass('hide');
  $('input.hide').trigger('click');
});

$('.img_chat').mouseover(function() {
  $('.change_image').removeClass('hide');
})

$('.img_chat').mouseout(function() {
  $('.change_image').addClass('hide');
})

$('#messige').keypress(function(e){
  if (event.which == 13) {
   // debugger;
    messige();
    e.stopPropagation()
  }
});
$('#submit_msg').click(function(e){
  messige();
  e.stopPropagation()
})

$(document).ready(function($) {
  var window_height = $(window).height();
  $('body').height(window_height - 50);
});
var form = $( "#area" );
var input = $("#messige");

var socket = io.connect('');

socket
  // .on('message',function(username,message){
  //   printMessage(username +">"+message);
  // })
  // .on('leave',function(){
  //   printStatus(username + "siktir exav chatic");
  // })
  // .on('join',function(username){
  //   printStatus(username + "ekav chat");
  // })
  .on('connect',function(){
    printStatus('kapn hastatvac e');
    form.on('submit',sendMessage);
    input.prop('disabled',false);
  })
  .on('disconnect',function(){
    printStatus('kapn korcrac e');
    form.off('submit',sendMessage);
    input.prop('disabled',true);
  })

function sendMessage(){
  var text =$("#messige").val();
  socket.emit('message',text,function(){
    printMessage(text);
  });
  $("#messige").val('');
  return false;
}


function printStatus(status){
  $( "#area" ).append( 
      
    
    '<div class="col-lg-8">'+
  '<div class="panel-body">' +
    '<ul class="chat">'+
      '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
        '<div class="chat-body clearfix">'+
          '<div class="header"><strong class="primary-font">pix</strong></div><br/><small class="text-muted"><span class="glyphicon glyphicon-time text-danger"></span><span><font color="red"><font></span></small>' +
        '</div>' +
        '<p>' + status+ '</p>' +
      '</li>' +
    '</ul>' +
  '</div>' +
'</div>'
    );
}

function printMassage(text){
  $( "#area" ).append( 
      
    
    '<div class="col-lg-8">'+
  '<div class="panel-body">' +
    '<ul class="chat">'+
      '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
        '<div class="chat-body clearfix">'+
          '<div class="header"><strong class="primary-font">pix</strong></div><br/><small class="text-muted"><span class="glyphicon glyphicon-time text-danger"></span><span><font color="red"><font></span></small>' +
        '</div>' +
        '<p>' + text+ '</p>' +
      '</li>' +
    '</ul>' +
  '</div>' +
'</div>'
    );
}


function messige(msg) {
  if (!msg) {
    var msg = $("#messige").val();
    //var nikname = $("#user_nikname").html();
    socket.emit('send_message', {message: msg},function(data){
      console.log(data);
       $( "#area" ).append( 
      
    
    '<div class="col-lg-8">'+
  '<div class="panel-body">' +
    '<ul class="chat">'+
      '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
        '<div class="chat-body clearfix">'+
          '<div class="header"><strong class="primary-font">pix</strong></div><br/><small class="text-muted"><span class="glyphicon glyphicon-time text-danger"></span><span><font color="red">' + date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString() +'</font></span></small>' +
        '</div>' +
        '<p>' + msg + '</p>' +
      '</li>' +
    '</ul>' +
  '</div>' +
'</div>'
    );
    $('audio')[0].play();
    $("#messige").val('');
    });
  }
  if(msg != ""){
    var date = new Date();
    
    $( "#area" ).append( 
      
    
    '<div class="col-lg-8">'+
  '<div class="panel-body">' +
    '<ul class="chat">'+
      '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
        '<div class="chat-body clearfix">'+
          '<div class="header"><strong class="primary-font">pix</strong></div><br/><small class="text-muted"><span class="glyphicon glyphicon-time text-danger"></span><span><font color="red">' + date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString() +'</font></span></small>' +
        '</div>' +
        '<p>' + msg + '</p>' +
      '</li>' +
    '</ul>' +
  '</div>' +
'</div>'
    );
    $('audio')[0].play();
    $("#messige").val('');
  }
}
socket.on('new_message', function(data) {
  console.log('asdasd')
  messige(data.message);
})
// '<span class="messiges" >' + date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString()  +' :: ' + msg +'</span>' );






























      // setTimeout(reconnect, 500);
// function reconnect(){
//   socket.once('error',function(){
//     setTimeout(reconnect,500);
//   });
//   socket.socket.connect();
// }