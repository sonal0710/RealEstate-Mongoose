const Joi = require('joi');

module.exports = {
  /*
   USER Validation
   */
  // POST - /users/signup
  signup: {
    body: {
      phone: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
      username: Joi.string(),
      password: Joi.string().required()
    }
  },
  // POST - /users/signin
  signin: {
    body: {
      phone: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
      password: Joi.string().required()
    }
  },

};