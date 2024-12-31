const express = require('express');
const auth = require('../../middlewares/auth');
const { emailService } = require('../../services');

const router = express.Router();

router
  .route('/')
  .post(auth(), (req, res) => {
    emailService.sendEmail('kharazian@canadaroyalmilk.com', 'test', 'Please see the attached calendar invite.');
    res.send('Create a user');
  });

  module.exports = router;