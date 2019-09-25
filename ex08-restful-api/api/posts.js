var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Post = require('../models/post')

router.get('/title/:title', async function (req, res, next) {
    try {
        res.json({
            error: 0,
            success: true,
            message: 'post retrieved successfully',
            post: post
        })
    } catch (error) {
        res.json({
            error: 1,
            success: false,
            message: 'post retrieved error',
            error: error
        })
    }
});

router.get('/id/:id', async (req, res, next) => {
    try {
        var post = await Post.findById(req.params.id).exec()
        res.json({
            error: 0,
            success: true,
            message: 'post retrieved successfully',
            post: post
        })
    } catch (error) {
        res.json({
            error: 1,
            success: false,
            message: 'post retrieved error',
            error: error
        })
    }
});

module.exports = router