const Post = require('../models/post');

exports.home = async (req, res, next) => {
  const posts = await Post.find({}).exec();
  res.json({ posts });
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

exports.post_update_post = async (req, res, next) => {
  const update = await Post.findOneAndUpdate(
    { title: req.body.titleOld, content: req.body.contentOld, author: req.user.user.username },
    { title: req.body.titleNew, content: req.body.contentNew }
  );
  res.json({ update });
};

exports.post_delete_post = async (req, res, next) => {
  const del = await Post.findOneAndDelete({
    title: req.body.title,
    content: req.body.content,
    author: req.user.user.username,
  });
  res.json({ del });
};
