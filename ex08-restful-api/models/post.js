var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
  title: String,
  author: String,
  postBody: String,
  tags: [String],
  comments: [{ commentBody: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: true },
  meta: {
    votes: Number,
    favs: Number
  }
});
postSchema.statics.findByTitle = function (title, posts) {
  return this.find({ title: new RegExp(title, 'i') }, posts);
};
postSchema.pre('save', function (next) {
  this.title = this.title.standardString()
  this.author = this.author.standardString()
  for (var i = 0; i < this.tags.length; i++) {
    this.tags[i] = this.tags[i].standardString()
    if (this.tags[i] == "") {
      this.tags.splice(i, 1)
    }
  }
  next()
})

module.exports = mongoose.model('Post', postSchema)