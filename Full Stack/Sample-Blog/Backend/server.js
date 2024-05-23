const cors = require("cors");
const express = require("express");
const connect_to_database = require("./database/connect_to_db");
const allRoutes = require('./routes/index')
const error_handling = require('./middlewares/error')

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const Databse_function = async () => {
  try {
    await connect_to_database();
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Use the routers
allRoutes(app)

// Error handling middleware
app.use(error_handling);

Databse_function();
