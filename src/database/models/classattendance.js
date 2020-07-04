'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassAttendance = sequelize.define('ClassAttendance', {
    studentId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    classId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    time: {
      allowNull: false,
      type: Sequelize.DATE
    },
    staffId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {});
  ClassAttendance.associate = function(models) {
    // associations can be defined here
  };
  return ClassAttendance;
};