'use strict';

const contactUsServcie = require('../services/ContactUsService');

const ContactUsController = () => {

  const saveContactUsDetails = async (req, res, next) => {
    let result;

    try {

      const user = await contactUsServcie().saveContactUs(req.body);
      result = user;

    } catch (error) {
      return next(error);
    }

    return res.status(200).json({
      isSuccess: true,
      message: 'Success',
      result
    });

  };

  return {
    saveContactUsDetails
  };
};

module.exports = ContactUsController;
