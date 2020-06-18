'use strict';

const authMdwr = require('../middlewares/AuthMiddleware');
const userCtrl = require('../controllers/UserCtrl');

module.exports = (router) => {

  router.route('/users/signup')
    .post(userCtrl().signup);

  router.route('/users/signin')
    .post(userCtrl().signin);

  router.route('/users')
    .get(authMdwr().auth, userCtrl().getProfile)
    .put(authMdwr().auth, userCtrl().editProfile);


  return router;
};