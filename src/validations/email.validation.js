const Joi = require('joi');

const sendAppointment = {
  body: Joi.object().keys({
    from: Joi.string().required().email(),
    to: Joi.array().items(Joi.string().email()),
    subject: Joi.string().required(),
    html: Joi.string().required(),
    method: Joi.string().required().valid('REQUEST', 'CANCEL'),
    icsText: Joi.string().required(),
    icsAttendeeText: Joi.string().required(),
  }),
};

module.exports = {
  sendAppointment,
}