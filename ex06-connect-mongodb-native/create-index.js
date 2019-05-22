const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Blog';

const postTitleIndex = function (db, callback) {
    db.collection('posts').createIndex(
        { "title": 1 },
        null,
        function (err, results) {
            console.log(results);
            callback();
        }
    );
};

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    postTitleIndex(db, function () {
        client.close();
    });
});