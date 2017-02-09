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
        $('#api-call').html('API Returned: ' + msg.ec + ' #=> Successful');
        $('#token').html('Token: ' + msg.token);
        parent.token = msg.token;
      }
      else {
        $('#api-call').html('API Returned: ' + msg.ec + ' #=> Failed');
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
        $('#api-call').html('Registration Returned: ' + msg.ec + ' #=> Registration Successful');
      }
      else {
        $('#api-call').html('Registration Returned: ' + msg.ec + ' #=> Registration Failed.');
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
        $('#api-call').html('Logout Returned: ' + msg.ec + ' #=> Logout Successful');
      } else {
        $('#api-call').html('Logout Returned: ' + msg.ec + ' #=> Logout Failed');
      }
    });
  } // end logout();

} // end APISync();
