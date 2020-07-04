'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    combination: {
      allowNull: true,
      type: DataTypes.STRING
    },
    label: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};