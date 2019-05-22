// Bring Mongoose into the app
var mongoose = require('mongoose');

String.prototype.standardString = function () {
    return (this.trim()).replace(new RegExp(/[ \t]+/, 'g'), ' ');
}

// Build the connection string
var dbURI = 'mongodb://localhost:27017/Blog';

// Create the database connection
mongoose.connect(dbURI, { useNewUrlParser: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS
require('./post');