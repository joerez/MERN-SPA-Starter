const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name : String,
  business : String,
  googleId : String,
  accessToken : String,
  refreshToken : String,
  phone : String,
  email : String,
  admin : { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
