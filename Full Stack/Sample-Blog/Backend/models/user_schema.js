const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
  },
  image: {
    type: String,
    default: "placeholder.jpeg",
  },
  resetToken: {
    type: String,
    unique: true,
  },
  expiry_of_Token : Date,

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.post("save", function () {
  console.log("User created successfully");
});

// Login search
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error("Incorrect Password");
  }
  throw new Error("Incorrect Email");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
