var express = require('express')
var app = express()
var path = require('path')
var fs =require('fs')

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

app.use(express.static('dist'))
app.use('/assets', express.static('assets'))

// Serve index.html by default
app.use('/', (req, res) => {
  res.redirect('index.html')
})

var server = app.listen(3000)
