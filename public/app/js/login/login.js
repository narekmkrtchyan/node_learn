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
        console.log( data.msg );
       } else {
        console.log('%c Dzer bolor tvyalner@ sxal en', 'color: red');
       }
    });
  } else {
    alert('ust paxar stuc - sxal es gre!!!')
  }
});
$('#quiry_time').click(function(b){
  var now = new Date();
  var hours = now.getHours();
  var minut = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();
  console.log(hours," ",minut," ", seconds," ",miliseconds);
  $.ajax({
    method:"get",
    url:"/test",
    data: {
      hourss: hours,
      minutt: minut,
      secondss: seconds,
      milisecondss: miliseconds
    }
  })
  .done(function( data ){
     
        alert( 'dzer harcumn tevel e  '+data.msg+' milivarkyan' );

  })

})

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
