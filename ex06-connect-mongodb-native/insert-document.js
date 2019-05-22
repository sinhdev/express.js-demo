const MongoClient = require('./node_modules/mongodb').MongoClient;
const assert = require('./node_modules/assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Blog';

const insertPosts = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Insert some documents
    var posts = [{
        title: "MongoDB Overview",
        description: "MongoDB is no sql database",
        by: "VTC Academy",
        url: "http://www.vtc.ac.vn",
        tags: [
            "mongodb",
            "database",
            "NoSQL"
        ],
        likes: 100
    },
    {
        title: 'NoSQL Database',
        description: "NoSQL database doesn't have tables",
        by: 'VTC Academy',
        url: 'http://www.vtc.ac.vn',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 20,
        comments: [{
            user: "user1",
            message: "My first comment",
            dateCreated: null,
            like: 0
        }]
    }]
    collection.insertMany(posts, function (err, result) {
        assert.equal(err, null);
        assert.equal(posts.length, result.result.n);
        assert.equal(posts.length, result.ops.length);
        console.log("Inserted 2 posts into the collection");
        callback(result);
    });
}
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    insertPosts(db, function () {
        client.close();
    });
});