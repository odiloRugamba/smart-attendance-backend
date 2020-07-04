'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassStudent = sequelize.define('ClassStudent', {
    classId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    studentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    schoolYear: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
  }, {});
  ClassStudent.associate = function(models) {
    // associations can be defined here
  };
  return ClassStudent;
};