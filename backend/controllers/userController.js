const bcrypt = require('bcrypt');

const auth = require('../controllers/authController');
const User = require('../models/user');
const Post = require('../models/post');

exports.user_detail = async (req, res, next) => {
  const posts = await Post.find({ author: req.user.user.username }).exec();
  res.json({ posts });
};

exports.user_signup_post = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    user.save(function (err) {
      if (err) return next(err);
      res.send('Success');
    });
  } catch {
    (e) => console.log(e);
  }
};

exports.user_login_post = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username }).exec();
  if (user == null) return res.status(400).send('Cannot find user');

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = auth.generateAccessToken({ username: user.username });
      res.json({ accessToken: accessToken });
    } else res.send('Not Allowed');
  } catch {
    res.status(500).send();
  }
};
