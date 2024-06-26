const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    },
    imageUrl:{ type: String, required: false }
  },{time_stamp:true});
  module.exports = mongoose.model('User', userSchema);  