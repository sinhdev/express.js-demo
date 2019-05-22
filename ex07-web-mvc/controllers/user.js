var mongoose = require('mongoose')
var router = require('../routes/form-data-router')
let User = require('../models/user')
var assert = require('assert')

router.get('/create', function (req, res, next) {
    res.render('./user/create', { title: 'Register' });
});
router.post('/create', function (req, res, next) {
    console.log(req.body)
    var newUser = new User()
    // newUser.user = req.body.user
    newUser.firstName = req.body.firstName
    newUser.lastName = req.body.lastName
    newUser.email = req.body.email
    
    // User.create(newUser, function (err, user) {
    //     if (error) {
    //         req.send('error to create user')
    //     }
    //     console.log(user)
    //     res.send('create user complete')
    // })

    var promise = newUser.save();
    assert.ok(promise instanceof Promise);
    promise.catch(function(err){
        console.error(err)
        res.send('error to create user')
    })
    promise.then(function (user) {
        console.log(user)
        res.send('create user complete')
    });

    // newUser.save()
    //     .then(function (user) {
    //         console.log(user)
    //     })
    //     .catch(function (err) {
    //         console.error(err)
    //     })

    // newUser.save(
    //     (user) => {
    //         console.log(user)
    //     },
    //     (err) => {
    //         console.error(err)
    //     }
    // )
});

module.exports = router;