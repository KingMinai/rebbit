const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    likes: [
      {
        type: String,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

// URL virtual to post page
PostSchema.virtual('url').get(function () {
  return '/s/r/' + this.subrebbit + this._id;
});

module.exports = mongoose.model('Post', PostSchema);
