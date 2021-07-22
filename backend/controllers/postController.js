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
  const post = await Post.findById(req.body.id, 'username');
  console.log(req.body.id);
  if (req.user.username == post.username) {
    await Post.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      content: req.body.content,
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

exports.post_delete_post = async (req, res, next) => {
  const post = await Post.findById(req.body.id, 'username');
  if (req.user.username == post.username) {
    await Post.findByIdAndDelete(req.body.id);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};
