var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
   if (err) throw err

   var db = client.db('Blog')

   db.collection('posts').find().toArray(function (err, result) {
      if (err) throw err

      console.log(result)
      result.forEach(post => {
         console.log(post.title + " - " + post.by)
      });
   })
})

// app.listen(3000, () => {
//    console.log('Web app is started at port 3000')
// });