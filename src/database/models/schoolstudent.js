'use strict';
module.exports = (sequelize, DataTypes) => {
  const SchoolStudent = sequelize.define('SchoolStudent', {
    schoolId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    entryYear: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    leaveYear: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    studentId: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
  }, {});
  SchoolStudent.associate = function(models) {
    // associations can be defined here
  };
  return SchoolStudent;
};