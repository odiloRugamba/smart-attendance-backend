'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guardian = sequelize.define('Guardian', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});
  Guardian.associate = function(models) {
    // associations can be defined here
  };
  return Guardian;
};