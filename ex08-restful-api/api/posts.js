var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Post = require('../models/post')

router.get('/title/:title', async function (req, res, next) {
    try {
        var posts = await Post.findByTitle(req.params.title).exec()
        res.send(posts)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/id/:id', async (req, res, next) => {
    try {
        var post = await Post.findById(req.params.id).exec()
        res.send(post)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router