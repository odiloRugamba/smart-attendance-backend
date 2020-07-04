'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      allowNull: false,
       type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM(['M','F','N/A'])
    },
    dob: {
      allowNull: false,
      type: DataTypes.DATE
    },
    disability: {
      allowNull: true,
      type: DataTypes.STRING
    },
    villageId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    schoolId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    classId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};