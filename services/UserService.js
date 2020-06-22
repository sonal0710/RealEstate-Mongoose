const User = require('../models/UserModel');

const userService = () => {

  const isUsedPhone = (phone) => {
    return new Promise((resolve, reject) => {
      User.findOne({
          'phone': phone
      }).then((result) => {
        result ? reject(1401) : resolve(true);
      })
    })
  };

  const getUserProfile = (phone) => {
    return new Promise((resolve, reject) => {
      User.findOne({
          'phone': phone
      }).then((result) => {
          result ? resolve(result) : reject(1402);
      })
    })
  };

  const signUp = async (userData) => {
    return new Promise((resolve, reject) => {
      User.create(userData)
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  };

  const signIn = (userData) => {
    return new Promise((resolve, reject) => {
      User.findOne({
          'phone': userData.phone
      }).then((result) => {
          result ? resolve(result) : reject(400);
      })
    })
  };


  return {
    signUp,
    signIn,
    isUsedPhone,
    getUserProfile
  };
};

module.exports = userService;