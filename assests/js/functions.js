function redirect(file) {
  const { remote } = require('electron')
  const path = require('path')
  const url = require('url')
  remote.getCurrentWindow().loadURL(url.format({
    pathname: path.join(__dirname, file),
    protocol: 'file:',
    slashes: true
  }));
}
