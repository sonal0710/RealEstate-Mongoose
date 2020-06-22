const contactUs = require('../models/ContactUsModel');

const contactUsService = () => {

  const saveContactUs = async (contactUsData) => {
    return new Promise((resolve, reject) => {
      contactUs.create(contactUsData)
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  };

  return {
    saveContactUs
  };
}

module.exports = contactUsService;