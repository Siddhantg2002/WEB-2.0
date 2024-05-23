const express = require("express");
const app = express();

const error_handling=()=>{
    app.use((err, req, res, next) => {
    console.error("Error:", err.stack); // Log the error stack for debugging
    res.status(500).send("Something broke!");
  });
}

module.exports= error_handling