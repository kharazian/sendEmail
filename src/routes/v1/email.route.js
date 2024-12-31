const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(auth(), (req, res) => {
    res.send('Get all users');
  })
  .post(auth(), (req, res) => {
    res.send('Create a user');
  });

  module.exports = router;