const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const emailValidation = require('../../validations/email.validation');
const { emailService } = require('../../services');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(emailValidation.sendAppointment), (req, res) => {
    emailService.sendAppointment(req.body)
    .then(() => {
      res.send('Appointment email sent'); 
    })
    .catch(error => {
      console.error('Error sending appointment email:', error);
      res.status(500).send('Error sending appointment email'); 
    });
  });

  module.exports = router;