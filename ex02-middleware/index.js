var express = require('express');
var app = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// })

// app.get('/user/:id', function (req, res, next) {
//     res.send('USER')
// })

app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}, function (req, res, next) {
    res.send('USER')
    next()
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('run at http://localhost:3000')
})