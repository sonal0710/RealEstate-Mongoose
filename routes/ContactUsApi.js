'use strict';

const validate = require('../middlewares/ValidationMiddleware');
const contactUsCtrl = require('../controllers/ContactUsCtrl');
const ContactUsValidations = require('../validations/ContactUsValidations');

module.exports = (router) => {

  router.route('/contact_us')
    .post(validate(ContactUsValidations.saveContactUsInfo), contactUsCtrl().saveContactUsDetails);

  return router;
};