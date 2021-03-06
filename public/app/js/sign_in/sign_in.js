(function() {

  $('.sign_in').click(function(e){
    $('#myModal').modal('hide');
    $('.confirm_password').val('');
    $('.name').val('');
    $('.password').val('');
    $('.loginemail').val('');
    $('.nikname').val('');
    $( "#div_registr" ).fadeOut( 300, function() {  
      $("#div_login").fadeIn(300);
    })
    return false;
  });

  $('#user_email').click(function(e){
    $('#user_email').css("borderColor","#fff");
  })
  $('#user_password').click(function(e){
    $('#user_password').css("borderColor","#fff");
  })
  
  $('#login_button').click(function(e){
    sign_in();
  });

  $('#user_password').keypress(function(e){
    if (event.which == 13) {
      sign_in();
    }
  });

  function sign_in(){
    var user_email    = $('#user_email').val();
    var user_password = $('#user_password').val();

    if (api.validation(user_email, user_password)) {
      $.ajax({
        method: "post",
        url: "/sign_in",
        data: { 
          email: user_email,
          password: user_password
        }
      })
      .done(function( data ) {

         $('#user_email').val('');
         $('#user_password').val('');
         //document.getElementById("user_email").style.borderColor = "none";
         if (data.msg) {
          window.location.href = '/user';
         } else {
          alert(data.error);
         }
      });
    } else {
      // TODO: Create Error handler and errors ui
      $('#user_email').css("borderColor","red");
      $('#user_password').css("borderColor","red");
    }
  }
  var api={

    validation: function(email, password) {
      if (this.email_valid(email) && password.length > 5) {
        return true;
      } else {
        return false;
      }
    },

    email_valid: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})();
