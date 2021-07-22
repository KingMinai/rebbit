const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.virtual('url').get(function () {
  return '/su/' + this.username;
});

module.exports = mongoose.model('User', UserSchema);
