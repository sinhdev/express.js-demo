let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    user: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String
})
module.exports = mongoose.model('User', userSchema)