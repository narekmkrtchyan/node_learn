var USER_NAME;

console.log('%c Ostanavites vasha destvie!!!!!!!!', 'color: red; font-size: 60px');

$('.special.cards .image').dimmer({
  on: 'hover'
});

function my_scroll() {
  $("#area")
    .animate(
      {
        scrollTop: $('#area').prop('scrollHeight')
      }, 1500
    );
}
setTimeout(my_scroll());
$("#area").scroll(function(){
  if($("#area").scrollTop() == 0){
    //console.log('1');
    $('#histri_message').css("display",'block');
  }else{
    $('#histri_message').css("display",'none');
  }
})

$('#histri_message').click(function(e){
  var lastTime = $("#area").find('u')[0].getAttribute('name');
  console.log('meker',lastTime);
    $.ajax({
      url: '/getHistory',
      method: 'get',
      data: {
        lastTime: lastTime
      },
      success: function(data) {
        var messages = data.old_messages;
        for (var i = 0; i < messages.length; i++) {
          render_old_messages(messages[i]);
        }

      }
    })

  });
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

$('#messige').keyup(function(e){
  if (event.which == 13) {
    var my_image_url = $('#image').attr('src');
    var message      = $('#messige').val()
    my_message(my_image_url,message);
    $('#messige').val('');
    
    e.stopPropagation();
  }
});

$('#submit_msg').click(function(e){
  var my_image_url = $('#image').attr('src');
  var message      = $('#messige').val()
  my_message(my_image_url,message);
  $('#messige').val('');
  e.stopPropagation()
})

$(document).ready(function($) {
  var window_height = $(window).height();
  $('body').height(window_height - 50);
});

var socket = io.connect('');

socket
  .on('join',function(username,gender,img_url){
    console.log('zzzzzzzzzz',gender);
    USER_NAME = username;
    var gender = gender;
    var messige_info ="is online.";
    var img_url = img_url;
    printStatus(username ,messige_info,gender,img_url);
  })
   .on('connect',function(){
     var messige_info ="Conected.";
     printStatus(messige_info);
   })

function printStatus(name,status,gender,img_url){
  console.log('name',name,'status',status,'img_url',img_url,'gender',gender);

  if(img_url){
    var url =img_url;
  }
  else
    if(!img_url && gender =='Male'){
      var url ='img/male.jpg';
    }
    else
      if(!img_url && gender =='Female'){
        var url ='img/female.jpg';
      }

  var date = new Date();
  if(arguments.length < 2){
  var my_image_url = $('#image').attr('src');
  $( "#area" ).append( 
    '<div class="ui horizontal divider">'+
      '<span class="ui medium circular image span_img">'+
        '<img src="'+my_image_url+'" class="">'+
      '</span>'+
    '</div>'+
    '<span>'+name+'</span>'+
    '<br><br>'+
    '<i class="wait icon wait_clock"></i><u style="color:red">'+date.toLocaleTimeString()+'</u>'+
    '<hr>'
  );
  my_scroll();
  }
  else{
    $( "#area" ).append( 
    

      '<div class="ui horizontal divider">'+
      '<span class="ui medium circular image span_img">'+
        '<img src="app/'+url+' " class="">'+
      '</span>'+
    '</div>'+
    '<span>'+status+'</span>'+
    '<br><br><span>'+ name+'</span>'+
    '<i class="wait icon wait_clock"></i><u style="color:red">'+date.toLocaleTimeString()+'</u>'+
    '<hr>'
    );
    my_scroll();
  }
}


function my_message(img_url,msg) {
  var date = new Date();
  if ($.trim(msg) != '') {
    $( "#area" ).append( 
      
      '<div class="ui horizontal divider">'+
      '<span class="ui medium circular image span_img">'+
        '<img src="'+img_url+'" class="">'+
      '</span>'+
    '</div>'+
    '<span>'+msg+'</span>'+
    '<br><br><span>'+ $('#user_name').html()+'</span>'+
    '<i class="wait icon wait_clock"></i><u style="color:red">'+date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString()+'</u>'+
    '<hr>'

    );
    socket.emit('send_message', {message: msg});
    //$('audio')[0].play();
    my_scroll();
  }
}

function friend_message(msg, username,gender,img_url) {
  var date = new Date();
  if(img_url){
    var url =img_url;
  }
  else
    if(!img_url && gender =='Male'){
      var url ='img/male.jpg';
    }
    else
      if(!img_url && gender =='Female'){
        var url ='img/female.jpg';
      }
  $( "#area" ).append( 
   
    '<div class="ui horizontal divider">'+
      '<span class="ui medium circular image span_img">'+
        '<img src="app/'+url+' " class="">'+
      '</span>'+
    '</div>'+
    '<span>'+msg+'</span>'+
    '<br><br><span>'+ username+'</span>'+
    '<i class="wait icon wait_clock"></i><u  style="color:red">'+date.getFullYear() + ' - ' + (date.getMonth() + 1 )+ ' - '+ date.getDate()+ "  " + date.toLocaleTimeString()+'</u>'+
    '<hr>'
  );
  //$('audio')[0].play();
  $("#messige").val('');
  my_scroll();
}

function render_old_messages(message) {
  console.log(message);
  if(message.userdata.img_url){
    var url =message.userdata.img_url;
  }
  else
    if(!message.userdata.img_url && message.gender =='Male'){
      var url ='img/male.jpg';
    }
    else
      if(!message.img_url && message.userdata.gender =='Female'){
        var url ='img/female.jpg';
      }
  $( "#area" ).prepend( 
    
   '<div class="ui horizontal divider">'+
      '<span class="ui medium circular image span_img">'+
        '<img src="app/'+url+' " class="">'+
      '</span>'+
    '</div>'+
    '<span>'+message.message+'</span>'+
    '<br><br><span>'+ message.userdata.name+'</span>'+
    '<i class="wait icon wait_clock"></i><u style="color:red" name='+ message.sendTime+'>'+new Date(message.sendTime).getFullYear() + '-' + ( new Date(message.sendTime).getMonth() + 1 ) + '-' + new Date(message.sendTime).getDate() +' ' +new Date(message.sendTime).toLocaleTimeString()+'</u>'+
    '<hr>' 
  );
}

socket.on('new_message', function(data) {
  console.log('data',data);
  friend_message(data.message, data.username,data.gender,data.img_url);
})

// function img_url(gender,img_url){
//   if(img_url){
//     var url =img_url;
//   }
//   else
//     if(!img_url && gender =='Male'){
//       var url ='img/male.jpg';
//     }
//     else
//       if(!img_url && gender =='Female'){
//         var url ='img/female.jpg';
//       }
// }
