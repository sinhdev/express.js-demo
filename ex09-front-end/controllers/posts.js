var express = require('express');
var router = express.Router();
var http = require('http');
const request = require('request');

router.get('/:id', function (req, res, next) {
    var apiUrl = 'http://localhost:3001/posts/id/' + req.params.id

    http.get(apiUrl, response => {
        response.setEncoding("utf8");
        let body = "";
        response.on("data", data => {
            body += data;
        });
        response.on("end", () => {
            var post = JSON.parse(body);
            res.render('./posts/post', post)
            console.log(post);
        });
    });

    // request.get(apiUrl, { json: true }, (err, response, post) => {
    //     if (err) { return console.log(err); }
    //     console.log(post);
    //     res.render('./posts/post', post)
    // });
});

module.exports = router;