const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  type: {
    type: String,
  },
  content: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    default: "",
  },
  chat_history: {
    type: [chatSchema],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
