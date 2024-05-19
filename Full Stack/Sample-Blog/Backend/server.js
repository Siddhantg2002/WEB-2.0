const cors = require('cors');
const express = require('express')

const connect_to_database = require('./connect_to_db');
const Latest_Blogs_data_feeding = require('./Latest_Blogs_data_feeding');
const All_blogs_data_feeding = require('./All_Blogs_data_feeding');

const latestBlogsRouter = require('./routes/latest_blogs');
const indexRouter = require('./routes/index')
const AllBlogsRouter = require('./routes/All_blogs')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const Databse_function = async () => {
  await connect_to_database();
  await Latest_Blogs_data_feeding();
  await All_blogs_data_feeding();
};
Databse_function();

// Use the routers
app.use('/', indexRouter);
app.use('/latest-blogs', latestBlogsRouter);
app.use('/all-blogs', AllBlogsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack); // Log the error stack for debugging
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
