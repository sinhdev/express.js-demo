const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Blog';

const findPosts = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Find some documents
    collection.find({title: "MongoDB Overview"}).toArray(function (err, posts) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(posts)
        callback(posts);
    });
}
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    findPosts(db, function () {
        client.close();
    });
});