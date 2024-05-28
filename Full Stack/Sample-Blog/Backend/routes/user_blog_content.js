const express = require("express");
const router = express.Router();
const user_blog = require("../models/User_blogs_schema");
const decryptJWT = require("../middlewares/Decryption");

router.get("/:id", decryptJWT, async (req, res, next) => {
  try {
    const { id } = req.params; 
    const userBlogs = await user_blog.find({ userId: req.user.id, _id: id });
    res.status(200).send(userBlogs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
