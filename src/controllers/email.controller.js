const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { emailService } = require('../services');

const sendAppointment = catchAsync(async (req, res) => {
  await emailService.sendAppointment(req.body);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  sendAppointment
};