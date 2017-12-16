var express = require('express');
var app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static('public', options));

var server = app.listen(3000);