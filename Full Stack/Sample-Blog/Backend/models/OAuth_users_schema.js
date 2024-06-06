const mongoose = require("mongoose");

const GoogleuserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  image: {
    type: String,
    default: "placeholder.jpeg"
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

GoogleuserSchema.post("save", function () {
  console.log("User created successfully");
});

const Google_User = mongoose.model("google_users", GoogleuserSchema);
module.exports = Google_User;
