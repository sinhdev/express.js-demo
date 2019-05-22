var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var router = express.Router();
var upload = multer();

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
router.use(upload.array());

router.get('/', function (req, res) {
    res.render('form');
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send("recieved your request!");
});

module.exports = router;