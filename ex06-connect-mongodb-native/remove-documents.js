const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Blog';

const removePost = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Update document where a is 2, set b equal to 1
    // collection.deleteOne(
    collection.deleteMany(
        { title: "MongoDB update many documents" },
        function (err, result) {
            assert.equal(err, null);
            console.log("delete the document with the title a equal to 'MongoDB update many documents'");
            callback(result);
        }
    );
}
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    removePost(db, function () {
        client.close();
    });
});