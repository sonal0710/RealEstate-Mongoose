const Joi = require('joi');

const signin = {
  body: Joi.object().keys({
    phone: Joi.string().required(),
    password: Joi.string().required()
  }),
};

const signup = {
  body: Joi.object().keys({
    phone: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
  }),
};

module.exports = {
  signin,
  signup
};