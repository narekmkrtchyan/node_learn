module.exports = validation;
function validation(email, password, confirm_password, name, nikname,gender) {

  var args_length = arguments.length;
  var valid_data  = {};
  console.log("sdgfsdfg",args_length,gender);

  // email
  if (!email_valid(email)) {
    valid_data.email = false;
  }
  // password
  if (password.length < 6) {
    valid_data.password = false;
  }

  if (args_length == 2) {
    return valid_data;
  } else {
    if (args_length == 6) {
      // confirm_password
      if (password !== confirm_password) {
        valid_data.confirm_password = false;
      }

      // name
      if (name.length < 2) {
        valid_data.name = false;
      }

      // nikname
      if (nikname.length < 6) {
        valid_data.nikname = false;
      }
      // gender
      if(gender != 'Male' && gender !='Female'){
        valid_data.gender = false;
      }

      return valid_data;
    } else {
      return 'no valid dates';
    }
  }
}

function email_valid(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
