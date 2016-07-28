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
      if (data.msg == 'user saved!') {
        $('#myModal').modal('show');
        console.log("sdfsdg",data.msg);
      }else if(data.msg == 'email duplikat'){
        console.log(data.msg);
      }else {
        console.log(data.error,data.error.email);
        if(data.error.email == false){
          $('.loginemail').css("borderColor","red");
          $('.loginemail').val(''); 
        } 
        if(data.error.password == false){ 
          $('.password').css("borderColor","red");
          $('.confirm_password').css("borderColor","red");
          $('.password').val('');
          $('.confirm_password').val('');
        }
        if(data.error.name == false){
          $('.name').css("borderColor","red");
          $('.name').val('');
        } 
       if(data.error.nikname == false){
          $('.nikname').css("borderColor","red");
          $('.nikname').val('');
        } else {
          $('.confirm_password').css("borderColor","red");
          $('.confirm_password').val('');
        }
      }
    });
  });
})();

