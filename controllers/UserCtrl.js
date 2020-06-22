'use strict';

const User = require('../models/UserModel');

const authService = require('../services/AuthService');
const userServcie = require('../services/UserService');

const UserController = () => {

  const signup = async (req, res, next) => {
    let result;

    try {

      const userData = {
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
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

    return res.status(200).json({
      isSuccess: true,
      message: 'Success',
      result
    });

  };

  const signin = async (req, res, next) => {
    let result;

    try {

      const userData = {
        phone: req.body.phone
      };
      
      const user = await userServcie().signIn(userData);
      
      if (!user || !(await user.isPasswordMatch(req.body.password))) {
        return res.status(400).json({ 
          isSuccess: false,
          message: req.__('400') });
      }

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

    return res.status(200).json({
      isSuccess: true,
      message: 'Success',
      result
    })

  };


  const getProfile = async (req, res, next) => {
    let result;

    try {
      result = await User.findById(req.userId);
    } catch (error) {
      return next(error);
    }

    return res.status(200).json({
      isSuccess: true,
      message: 'Success',
      result
    })
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

    return res.status(200).json({
      isSuccess: true,
      message: 'Success'
    })
  };

  return {
    signup,
    signin,
    getProfile,
    editProfile,
  };
};

module.exports = UserController;
