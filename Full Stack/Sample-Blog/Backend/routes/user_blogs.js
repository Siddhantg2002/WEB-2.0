const express = require("express");
const router = express.Router();
const user_blog = require("../models/User_blogs_schema");
const decryptJWT = require("../middlewares/Decryption");

router.post("/", decryptJWT, async (req, res, next) => {
  try {
    const { title, content, date, author } = req.body;
    const blog = new user_blog({
      userId: req.user.id,
      title,
      author,
      date,
      content,
    });
    await blog.save();
    
    // Fetch all blogs associated with the user
    const userBlogs = await user_blog.find({ userId: req.user.id });
    res.status(201).json({
      message: "Blog post created successfully",
      newBlog: blog,
      userBlogs: userBlogs,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
