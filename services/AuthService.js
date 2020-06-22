const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret';
const secret = JWT_SECRET_KEY;

const User = require('../models/UserModel');

const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, {expiresIn: "1h"});
  const verify = (token, done) => {
    jwt.verify(token, secret, {}, async (err, decoded) => {
      if (err) {
        switch (err.message) {
          case 'jwt expired':
            return done(10401);
          case 'invalid token':
            return done(10403);
          default:
            return done(err.message);
        }
      } else {
        const user = await User.findOne({
            'phone': decoded.phone
        });
        return user ? done(null, user.id) : done(401);
      }
    })
  };

  return {
    issue,
    verify,
  };
};

module.exports = authService;
