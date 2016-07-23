module.exports = validation;
function validation(email, password, confirm_password, nik_name, name) {
  var arg_length = arguments.length;
  var valid_data = {};

  // email
  if (!email_valid(email)) {
    valid_data.email = false;
  }
  // password
  if (password.length < 6) {
    valid_data.password = false;
  }

  if (arg_length == 2) {
    return valid_data;
  } else {
    if (arg_length == 5) {
      // confirm_password
      if (password !== confirm_password) {
        valid_data.confirm_password = false;
      }

      // nik_name
      if (nik_name.length < 6) {
        valid_data.nik_name = false;
      }

      // name
      if (name.length < 6) {
        valid_data.name = false;
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
