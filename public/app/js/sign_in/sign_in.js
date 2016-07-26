function sign_in(){
  $('#login_button').click(function(e) {
    var user_email = $('#user_email').val();
    var user_password = $('#user_password').val();
    if (true) {
      $.ajax({
        method: "post",
        url: "/test",
        data: { 
          email: user_email,
          password: user_password
        }
      })
      .done(function( data ) {
         $('#user_email').val('');
         $('#user_password').val('');
         if (data.msg) {
          console.log(data.msg);
         } else {
          console.log(data.error);
         }
      });
    } else {
      alert('you write is incorrect')
    }
  });

  var api={
    validation: function(email, password) {
      if (email_valid(email) && password.length > 5) {
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
}

sign_in();
