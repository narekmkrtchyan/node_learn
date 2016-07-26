function sign_up(){
  $('#sign_up').click(function(c){
    $("#div_login").fadeOut(300,function(){
      $( "#div_registr" ).fadeIn( 300, function(){

      })
    })
    return false;
  });
  $('#sign_in').click(function(a){
    $( "#div_registr" ).fadeOut( 300, function() {  
      $("#div_login").fadeIn(300,function(){

      })
    })
    return false;
  });
  $('#register').click(function(a){
    var email = $('.loginemail').val();
    var password = $('.password').val();
    var confirm_password = $('.confirm_password').val();
    var name = $('.name').val();
    var nikname = $('.nikname').val();
    $.ajax({
      method: "post",
      url: "/sign",
      data: {
        email:            email,
        password:         password,
        confirm_password: confirm_password,
        name:             name,
        nikname:          nikname
      }
    })
    .done(function(data) {
      if (data.msg) {
        console.log(data.msg);
      } else {
        console.log(data.error);
      }
    })
  })
}

sign_up();
