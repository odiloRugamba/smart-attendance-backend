'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassTeacher = sequelize.define('ClassTeacher', {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  ClassTeacher.associate = function(models) {
    // associations can be defined here
  };
  return ClassTeacher;
};