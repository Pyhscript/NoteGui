function CookieJar() {
  this.session = require('electron').remote.getCurrentWindow().webContents.session;

  this.cookieList = [],

  this.getCookie = function(name, parent=this) {
    var value = { name: name };
    parent.session.cookies.get(value, (error, cookies, store=this.cookieList) => {
      console.log('CookieJar stored cookied!');
      store.push(cookies[0].name + '=' + cookies[0].value);
    });
  }

  this.showCookies = function(parent=this) {
    var l = parent.cookieList.length;
    for(var x = 0; x < l; x++) {
      alert(parent.cookieList[x]);
    }
  }

  this.setCookie = function(cookie, parent=this) {
    parent.session.cookies.set(cookie, (err) => { if(err) console.error(err) })
  }
}
