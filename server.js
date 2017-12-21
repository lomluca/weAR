var express = require('express')
var app = express()
var path = require('path')
var fs =require('fs')

var logger = require('morgan')

// Use colorful logger
app.use(logger('dev'))

// Serve static resources
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

let pagesDir = path.resolve(__dirname, 'pages')
const dirs = fs.readdirSync(pagesDir).filter(f => fs.statSync(path.join(pagesDir, f)).isDirectory())
dirs.forEach(d => {
  let dir = path.resolve(pagesDir, d)
  app.use(express.static(dir, options))
})

app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(express.static(path.resolve(__dirname, 'public')))

// Show a nice 404 error message page
app.use((req, res) => {
  res.redirect('index.html')
})

// Start listening
port = process.env.PORT || 3000
app.listen(port, (err) => {
  if(err) throw err
  console.log('> Listening on http://localhost:%s', port)
})
