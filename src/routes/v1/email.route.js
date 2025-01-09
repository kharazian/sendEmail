const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const emailValidation = require('../../validations/email.validation');
const emailController = require('../../controllers/email.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(emailValidation.sendAppointment), emailController.sendAppointment);

  module.exports = router;