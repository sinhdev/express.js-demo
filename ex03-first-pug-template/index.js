var express = require('express')
var app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/first_template', function (req, res) {
    res.render('first-view')
})

app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {
        name: "VTC Academy",
        url: "http://www.vtc.edu.vn"
    })
})
app.get('/conditional', (req, res) => {
    res.render('conditional', null)
})
app.get('/conditional/:name/:age', (req, res) => {
    res.render('conditional', { user: { name: req.params.name, age: req.params.age } })
})

app.get('/components', function(req, res){
    res.render('content');
});

app.listen(3000, () => {
    console.log('run at http://localhost:3000')
})