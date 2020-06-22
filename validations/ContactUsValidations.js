const Joi = require('joi');

const saveContactUsInfo = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string(),
    service_concern: Joi.string().required(),
    query: Joi.string()
  }),
};

module.exports = {
  saveContactUsInfo
};