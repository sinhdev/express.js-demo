var router = require('./default-router')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
// for parsing application/json
router.use(bodyParser.json());
// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
// for parsing multipart/form-data
router.use(upload.array());
//export router
module.exports = router