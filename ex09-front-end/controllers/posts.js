var express = require('express');
var router = express.Router();
var http = require('http');
const request = require('request');

// var options = {
//     host: 'localhost',
//     port: 3001
// };
/* GET home page. */
router.get('/:id', function (req, res, next) {
    request.get('http://localhost:3001/posts/id/' + req.params.id, { json: true }, (err, response, post) => {
        if (err) { return console.log(err); }
        console.log(post);
        res.render('./posts/post', post)
    });
    
    // options.path = '/posts/id/' + req.params.id
    // var request = http.get(options, function (response) {
    //     console.log('STATUS: ' + response.statusCode);
    //     console.log('HEADERS: ' + JSON.stringify(response.headers));
    //     // Buffer the body entirely for processing as a whole.
    //     var bodyChunks = [];
    //     response.on('data', function (chunk) {
    //         // You can process streamed parts here...
    //         bodyChunks.push(chunk);
    //     }).on('end', function () {
    //         var post = Buffer.concat(bodyChunks)
    //         console.log('POST: ' + post)
    //         res.render('./posts/post', post)
    //     })
    // });
    // request.on('error', function (e) {
    //     console.log('ERROR: ' + e.message);
    // });
});

module.exports = router;