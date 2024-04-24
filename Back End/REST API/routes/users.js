const express = require("express");
const router = express.Router();
const User_schema = require("../models/user_schema");
const Users = require("../models/user_schema");

//getting all
router.get("/", async (req, res) => {
  try {
    const users = await User_schema.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//creating one
router.post("/", async (req, res) => {
  const user = new User_schema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const new_user = await user.save();
    res.status(201).json(new_user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//getting one
router.get("/:id", get_user, async (req, res) => {
  const { name, email, password } = res.user;
  try {
    res.json({ name, email, password });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//deleting one
router.delete("/:id", get_user, async (req, res) => {
  try {
    await res.user.delete();
    res.json({ message: "Deleted user" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Updating One
router.patch('/:id', get_user, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name
  }
  if (req.body.email != null) {
    res.user.email = req.body.email
  }
  if (req.body.password != null) {
    res.user.password = req.body.password
  }
  try {
    const updated_user = await res.user.save()
    res.json(updated_user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Middleware for fetching users by ID
async function get_user(req, res, next) {
  let user;
  try {
    // Assuming your model is named User
    user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}


module.exports = router;
