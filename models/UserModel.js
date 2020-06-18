'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
    // models.User.hasMany(models.Post);
  };




  return User;

};