$('#submit_msg').click(function(e){
  var x =$("#messige").val()
  if(x != ""){
   $( "#area" ).append( '<span class="messiges" >'+x+'</span>' );
   $('audio')[0].play();
   $("#messige").val("");
  }
})


$(document).ready(function($) {
  var window_height = $(window).height();
  $('body').height(window_height - 50);
});
