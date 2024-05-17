const cors = require('cors');
const express = require('express');
const feeding_blogs = require('./models/data_feeding');
const Blogs = require("./models/schema");
const connect_to_database = require("./connect_to_db")

const app = express();
const port = 3000;

app.use(cors());

connect_to_database();
feeding_blogs()

app.get('/', async (req, res) => {
  const blogs = await Blogs.find();
    res.send(blogs)
})
app.get('/:id', async (req, res) => {
  const blogs = await Blogs.find({id : req.params.id});
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

