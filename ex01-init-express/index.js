var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("<h1>Hello world!");
});

app.get('/hello', function (req, res) {
   res.send("Hello World!");
});

app.post('/hello', function (req, res) {
   res.send("You just called the post method at '/hello'!\n");
});
app.all('/test', function (req, res) {
   res.send("HTTP method doesn't have any effect on this route!");
});

var things = require('./things.js');
//both index.js and things.js should be in same directory
app.use('/things', things);
app.get('/:id', function (req, res) {
   res.send('The id you specified is ' + req.params.id);
});

app.get('*', function(req, res){
   res.send('ERROR 404: Sorry, this is an invalid URL.');
});

app.listen(3000, ()=>{
   console.log('Web app is started at http://localhost:3000')
});