function APISync() {
  this.token = '',
  this.server = 'http://mshredsuxx.ml:1337',

  this.login = function(user, pass, parent=this) {
    $.ajax({
      url:      parent.server + '/login',
      method:   "POST",
      dataType: "JSON",
      data: {
        username: user,
        password: pass,
      }
    }).done(function(msg) {
      if(msg.ec === 0) {
        console.log('Login Successful: ' + msg.ec);
        parent.token = msg.token;
      }
      else {
        console.log('Login Failed: ' + msg.ec);
      }
    });
  } // end login(user, pass);

  this.register = function(user, pass, pass2, group, parent=this) {
    $.ajax({
      url: parent.server + '/userprofile/create',
      method: "POST",
      dataType: "JSON",
      data: {
        username:   user,
        password:   pass,
        password2:  pass2,
        groups:     group,
        BITToken:   parent.token,
      }
    }).done(function(msg) {
      if (msg.ec === 0) {
        console.log('Registration Successful: ' + msg.ec);
      }
      else {
        console.log('Registration Failed: ' + msg.ec);
      }
    });
  } // end register(user, pass, pass2, group)

  this.logout = function(parent=this) {
    $.ajax({
      url: parent.server + '/logout',
      method: "GET",
      dataType: "JSON",
      data: {
        BITToken: parent.token,
      }
    }).done(function(msg) {
      if(msg.ec === 0) {
        console.log('Logout Successful: ' + msg.ec);
      } else {
        console.log('Logout Failed: ' + msg.ec);
      }
    });
  } // end logout();

} // end APISync();
