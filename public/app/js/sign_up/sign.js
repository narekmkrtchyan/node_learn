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
$('#register').click(function(a){
  var emaile = $('.your_emaile').val();
  var password = $('.password').val();
  var confirm_password = $('.confirm_password').val();
  var your_name = $('.your_name').val();
  var username = $('.username').val();
  //console.log(emaile," ",password," ",confirm_password," ",your_name," ",username);
  $.ajax({
    method: "post",
    url: "/sign",
    data: {
      emaile:           emaile,
      password:         password,
      confirm_password: confirm_password,
      your_name:        your_name,
      username:         username
    }
  })
  .done(function(data){
    alert(data.msg);
  })
})