const express = require('express');
const All_Blogs = require('../models/All_Blogs_schema');

const router = express.Router();

// Route to fetch all Latest blogs
router.get('/', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const blogs = await All_Blogs.find();
    if (endIndex < blogs.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
  
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
  
    results.results = blogs.slice(startIndex, endIndex);
    res.send(results);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route to fetch a Latest blog by ID
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id))) {
    return res.status(400).send('Invalid blog ID');
  }

  try {
    const blog = await All_Blogs.findOne({ id: Number(id) });
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.send(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

module.exports = router;
