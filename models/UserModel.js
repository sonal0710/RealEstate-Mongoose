const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcryptService = require('../services/BcryptService');

/**
 * User schema
*/

const UserSchema = new Schema({
  phone: { type: String, required: true },
  username: { type: String, default: '' },
  password: { type: String, required: true }
});

UserSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcryptService().comparePassword(password, user.password);
};

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcryptService().password(user.password);
  }
  next();
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;