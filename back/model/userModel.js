const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 250,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
    maxlength: 30,
  },
  surname: {
    type: String,
    required: true,
    maxlength: 30,
  },
  date: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
