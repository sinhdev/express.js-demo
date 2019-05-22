var express = require('express');
var app = express()

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

app.use(express.static('public', options))
app.listen(3000, () => {
    console.log('static middleware run at http://localhost:3000')
})