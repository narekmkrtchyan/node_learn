(function() {

  $('#sign_up').click(function(e){
    $("#div_login").fadeOut(300,function(){
      $( "#div_registr" ).fadeIn(300);
    })
    return false;
  });
  
  $('#register').click(function(e) {

    var email             = $('.loginemail').val();
    var password          = $('.password').val();
    var confirm_password  = $('.confirm_password').val();
    var name              = $('.name').val();
    var nikname           = $('.nikname').val();

    $.ajax({
      method: "post",
      url: "/sign_up",
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
    });
  })
})();
