const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Blog';

const updatePost = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Update document where a is 2, set b equal to 1
    // collection.updateOne(
    collection.updateMany(
        { title: "MongoDB Overview" },
        { $set: { title: "MongoDB update many documents" } },
        function (err, result) {
            assert.equal(err, null);
            console.log("Updated the document with the field title equal to 'MongoDB Overview'");
            callback(result);
        }
    );
}
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    updatePost(db, function () {
        client.close();
    });
});