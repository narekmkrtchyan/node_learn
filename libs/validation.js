module.exports = validation;
function validation(email,password) {
  if (email_valid(email)){
    if (password.length > 10) {
      return 'all';
    } else {
      return 'email!password'
    }
  } else {
    if (password.length < 10) {
      return '!email!password';
    } else {
      return '!emailpassword';
    }
  }
}


function email_valid(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


// $('#login_button').click(function(e) {
//  var user_email = $('#user_email').val();
//  var user_password = $('#user_password').val();
//  if (validation(user_email, user_password)) {
//    $.ajax({
//      method: "post",
//      url: "/test",
//      data: { 
//        name: user_email,
//        password: user_password
//      }
//    })
//    .done(function( data ) {
//       $('#user_email').val('');
//       $('#user_password').val('');
//       console.log( data.msg );
//    });
//  } else if(email_valid(user_email) ==false) {
//    alert('mutqagreleq sxal email');
//  }
//  else{
//    alert('mutqagreleq sxal password');
//  }
// });
