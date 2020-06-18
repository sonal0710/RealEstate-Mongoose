'use strict';

const authService = require('../services/AuthService');

/*******************
 *  Authenticate
 ********************/
const AuthMiddleware = () => {
  const auth = (req, res, next) => {
    if (!req.headers.authorization) {
      return next(401);
    }

    authService().verify(req.headers.authorization, (err, userId) => {
      if (err) {
        return next(err);
      } else {
        req.userId = userId;
        return next();
      }
    })

  };
  return {auth};
};

module.exports = AuthMiddleware;