module.exports = validation;
function validation(email, password, confirm_password, your_name, username) {
  //console.log(email);
 var arg_length = arguments.length;
 //console.log(arg_length);
 if (arg_length == 2 ) {
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
} else {
    if (arg_length == 5) {
      var count = 0;
      if(email_valid(email)) {
        count++;
      }
      else {
        return '!email';
      }
      if(password.length>5) {
        count++;
      }
      else {
        return '!password';
      }
      if(password === confirm_password) {
        count++;
      }
      else {
        return '!confirm_password';
      }
      if(your_name.length>5) {
        count++;
      }
      else {
        return '!your_name';
      }
      if(username.length>3) {
        count++;
      }
      else {
        return '!username';
      }
      if(count == 5) {
        return 'all';
      }
    }
  }
}

function email_valid(email) {
  //console.log(email);
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //console.log(re.test(email));
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






// var user_data = {
//   ...
// }

// var err_validation {

// }

// if (!user_data.name.length > 6) {
//   err_validation.user_data.name = false;
// }

// if (email_valid(user_data.email)) {
//   err_validation.user_data.email = false;

// } else {

// }

// if () {

// } else {

// }