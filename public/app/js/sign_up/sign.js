$('#sign_up').click(function(c){
  $("#div_login").fadeOut(3000,function(){
    $( "#div_registr" ).fadeIn( 3000, function(){

    })
  })
  return false;
})
$('#sign_in').click(function(a){
  $( "#div_registr" ).fadeOut( 3000, function() {  
    $("#div_login").fadeIn(3000,function(){

    })
  })
  return false;
})