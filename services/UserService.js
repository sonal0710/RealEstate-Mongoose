const model = require('../models');
const Op = require('sequelize').Op;
const util = require('../utils/Crypto');


const userService = () => {

  const isUsedPhone = (phone) => {
    return new Promise((resolve, reject) => {
      model.User.findOne({
        where: {
          phone
        },
        attributes: ['id']
      }).then((result) => {
        result ? reject(1401) : resolve(true);
      })
    })
  };

  const getUserProfile = (phone) => {
    return new Promise((resolve, reject) => {
      model.User.findOne({
        where: {
          phone
        },
        attributes: ['id']
      })
        .then((result) => {
          result ? resolve(result) : reject(1402);
        })
    })
  };

  const signUp = async (userData) => {
    return new Promise((resolve, reject) => {
      model.User.create(userData)
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  };

  const signIn = (userData) => {
    return new Promise((resolve, reject) => {
      model.User.findOne({
        where: {
          phone: userData.phone
        }
      })
        .then((result) => {
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