var mongoose = require('mongoose')
var router = require('../routes/form-data-router')
var Post = require('../models/post')

router.get('/add', function (req, res, next) {
    res.render('./post/add', { title: 'add post' });
});
router.post('/add', function (req, res, next) {
    console.log(req.body)
    Post.create({
        title: req.body.title,
        author: req.body.author,
        postBody: req.body.body,
        tags: req.body.tags.split(new RegExp(/[,;#]/, "g"))
    }, function (err, post) {
        console.log(post)
        res.send('add post complete')
    })
});

module.exports = router;