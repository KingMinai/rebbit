const Post = require('../models/post');

exports.home = async (req, res, next) => {
  const posts = await Post.find({}).exec();
  res.json({ posts });
};

exports.post_detail = (req, res, next) => {
  res.json({ status: 'NOT READY!' });
};

exports.post_create_post = (req, res, next) => {
  let post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.user.user.username,
  });
  post.save(function (err) {
    if (err) return next(err);
    res.send('Success!');
  });
};

exports.post_update_post = (req, res, next) => {
  res.json({ status: 'NOT READY!' });
};

exports.post_delete_post = (req, res, next) => {
  res.json({ status: 'NOT READY!' });
};
