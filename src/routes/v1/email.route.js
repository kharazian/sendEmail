const express = require('express');
const auth = require('../../middlewares/auth');
const { emailService } = require('../../services');

const router = express.Router();

router
  .route('/')
  .post(auth(), (req, res) => {
    emailService.sendAppointment(req.body);
    res.send('Create a user');
  });

  module.exports = router;