const express = require("express");
const router = express.Router();
const users = require("../models/user_schema");
const decryptJWT = require("../middlewares/Decryption");

router.get("/", decryptJWT, async (req, res, next) => {
  try {
    const userBlogs = await users.find({_id: req.user.id});
    res.status(200).send(userBlogs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
