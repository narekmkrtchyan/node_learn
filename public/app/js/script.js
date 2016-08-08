console.log('%c Narek skazal Ostanavites suki!!!!!!!!', 'color: red; font-size: 60px');


setTimeout(function(){ $("#area").animate({ scrollTop: $('#area').prop("scrollHeight")}, 2500); }, 300);
  


var socket = io.connect();

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

function messige(msg) {
  if (!msg) {
    var msg = $("#messige").val();
    //var nikname = $("#user_nikname").html();
    socket.emit('send_message', {message: msg});
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