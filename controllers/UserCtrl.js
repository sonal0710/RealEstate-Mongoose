'use strict';

const model = require('../models');

const authService = require('../services/AuthService');
const userServcie = require('../services/UserService');
const bcryptService = require('../services/BcryptService');

const UserController = () => {

  const signup = async (req, res, next) => {
    console.log(req.body);
    let result;

    try {

      const userData = {
        phone: req.body.phone,
        username: req.body.username,
        password: bcryptService().password(req.body.password)
      };

      await userServcie().isUsedPhone(userData.phone);
      const user = await userServcie().signUp(userData);

      const token = authService().issue({id: user.id, phone: user.phone});

      result = {
        profile: {
          id: user.id,
          phone: user.phone,
          username: user.username
        }, token
      }

    } catch (error) {
      return next(error);
    }

    return res.r(result);

  };

  const signin = async (req, res, next) => {

    let result;

    try {

      const userData = {
        phone: req.body.phone
      };

      const user = await userServcie().signIn(userData);
      
      if (!user) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
      }

      if (bcryptService().comparePassword(req.body.password, user.password)) {
        const token = authService().issue({id: user.id, phone: user.phone});

        result = {
          profile: {
            id: user.id,
            phone: user.phone,
            username: user.username
          }, token
      }
      }

    } catch (error) {
      return next(error);
    }

    return res.r(result);

  };


  const getProfile = async (req, res, next) => {
    let result;

    try {

      result = await model.User.findOne({
        where: {
          id: req.userId
        }
      });


    } catch (error) {
      return next(error);
    }

    return res.r(result);
  };


  const editProfile = async(req, res, next) => {
    try {

      const userData = {
        username: req.body.usernam
      };

      await model.User.update(
        userData, {where: {id: req.userId}});

    } catch (error) {
      return next(error);
    }

    return res.r();
  };

  return {
    signup,
    signin,
    getProfile,
    editProfile,
  };
};

module.exports = UserController;
