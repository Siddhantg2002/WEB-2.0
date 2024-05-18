const cors = require('cors');
const express = require('express');
const feeding_blogs = require('./models/data_feeding');
const Blogs = require("./models/schema");
const connect_to_database = require("./connect_to_db");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Ensure you can parse JSON bodies if needed

// Connect to the database
connect_to_database();

// Feed initial blogs
feeding_blogs();

// Serve favicon.ico to prevent CastError
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Root route to fetch all blogs
app.get('/', async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    res.send(blogs);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route to fetch a blog by ID
app.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id))) {
    return res.status(400).send('Invalid blog ID');
  }

  try {
    const blog = await Blogs.findOne({ id: Number(id) });
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.send(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack); // Log the error stack for debugging
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
