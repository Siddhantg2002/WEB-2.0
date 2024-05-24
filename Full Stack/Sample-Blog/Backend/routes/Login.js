const express = require('express');
const router = express.Router();
const error_handling = require("../middlewares/error")


router.get('/', async (req, res, next) => {
    try {
      res.send("login page");
    } catch (error) {
        error_handling()
    }
  });

  module.exports = router