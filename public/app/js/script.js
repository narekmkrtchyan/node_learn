var USER_NAME;

console.log('%c Ostanavites vasha destvie!!!!!!!!', 'color: red; font-size: 60px');

function my_scroll() {
  $("#area")
    .animate(
      {
        scrollTop: $('#area').prop("scrollHeight")
      }, 1500
    );
}
setTimeout(my_scroll());
$("#area").scroll(function(){
  if($("#area").scrollTop() == 0){
    $('#histri_message').css("display",'block');
  }else{
    $('#histri_message').css("display",'none');
  }
})
$('#histri_message').click(functiom(){
  
})
// if(($("#area").scrollTop()) == 0){
//   alert(1);
// }


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
    my_message($('#messige').val());
    $('#messige').val('');
    e.stopPropagation();
  }
});

$('#submit_msg').click(function(e){
  my_message($('#messige').val());
  $('#messige').val('');
  e.stopPropagation()
})

$(document).ready(function($) {
  var window_height = $(window).height();
  $('body').height(window_height - 50);
});

var socket = io.connect('');

socket
  // .on('leave',function(){
  //   printStatus(username+ "siktir exav chatic");
  // })
  .on('join',function(username){
    USER_NAME = username;
    var messige_info ="is online.";
    printStatus(username ,messige_info);
  })
   .on('connect',function(){
     var messige_info ="Conected.";
     printStatus(messige_info);
   })
  // .on('disconnect',function(){
  //   printStatus('kapn korcrac e');
  //   form.off('submit',sendMessage);
  //   input.prop('disabled',true);
  // })

function printStatus(name,status){
  var date = new Date();
  if(arguments.length < 2){
  $( "#area" ).append( 
    '<div class="col-lg-8">'+
      '<div class="panel-body">' +
        '<ul class="chat">'+
          '<li class="left clearfix">'+
            '<span class="chat-img pull-left">'+
              '<img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/>'+
            '</span>'+
            '<div class="chat-body clearfix">'+
              '<div class="header"><strong class="primary-font"> uvajaemie </strong></div><br/>'+
              '<small class="text-muted">'+
                '<span class="glyphicon glyphicon-time text-danger"></span>'+
                '<span><font color="red">' + date.toLocaleTimeString() +'<font></span>'+
              '</small>' +
            '</div>' +
            '<p>' + name + '</p>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</div>'
  );
  my_scroll();
  }
  else{
    $( "#area" ).append( 
      '<div class="col-lg-8">'+
        '<div class="panel-body">' +
          '<ul class="chat">'+
            '<li class="left clearfix">'+
              '<span class="chat-img pull-left">'+
                '<img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/>'+
              '</span>'+
              '<div class="chat-body clearfix">'+
                '<div class="header"><strong class="primary-font">'+ name +'</strong></div><br/>'+
                '<small class="text-muted">'+
                  '<span class="glyphicon glyphicon-time text-danger"></span>'+
                  '<span><font color="red">' + date.toLocaleTimeString() +'<font></span>'+
                '</small>' +
              '</div>' +
              '<p>' + status + '</p>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>'
    );
    my_scroll();
  }
}


function my_message(msg) {
  var date = new Date();
  if ($.trim(msg) != '') {
    $( "#area" ).append( 
      '<div class="col-lg-8">'+
        '<div class="panel-body">' +
          '<ul class="chat">'+
            '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
              '<div class="chat-body clearfix">'+
                '<div class="header">' +
                  '<strong class="primary-font">' + $('#user_name').html() + '</strong>' +
                '</div><br/>' +
                '<small class="text-muted">' +
                  '<span class="glyphicon glyphicon-time text-danger"></span>' +
                  '<span><font color="red">' + date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString() +'</font></span>'+
                '</small>' +
              '</div>' +
              '<p>' + msg + '</p>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>'
    );
    socket.emit('send_message', {message: msg});
    $('audio')[0].play();
    my_scroll();
  }
}

function friend_message(msg, username) {
  var date = new Date();
  $( "#area" ).append( 
    '<div class="col-lg-8">'+
      '<div class="panel-body">' +
        '<ul class="chat">'+
          '<li class="left clearfix"><span class="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" class="img-circle"/></span>'+
            '<div class="chat-body clearfix">'+
              '<div class="header">' +
                '<strong class="primary-font">' + username + '</strong>' +
              '</div><br/>' +
              '<small class="text-muted">' +
                '<span class="glyphicon glyphicon-time text-danger"></span>' +
                '<span><font color="red">' + date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString() +'</font></span></small>' +
            '</div>' +
            '<p>' + msg + '</p>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</div>'
  );
  $('audio')[0].play();
  $("#messige").val('');
  my_scroll();
}

socket.on('new_message', function(data) {
  console.log('asdasd');
  friend_message(data.message, data.username);
})
