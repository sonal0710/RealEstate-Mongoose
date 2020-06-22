'use strict';

const authMdwr = require('../middlewares/AuthMiddleware');
const validate = require('../middlewares/ValidationMiddleware');
const userCtrl = require('../controllers/UserCtrl');
const UserValidations = require('../validations/UserValidations');

module.exports = (router) => {

  router.route('/users/signup')
    .post(validate(UserValidations.signup), userCtrl().signup);

  router.route('/users/signin')
    .post(validate(UserValidations.signin), userCtrl().signin);

  router.route('/users')
    .get(authMdwr().auth, userCtrl().getProfile)
    .put(authMdwr().auth, userCtrl().editProfile);


  return router;
};