'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentGuardian = sequelize.define('StudentGuardian', {
    studentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    guardianId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    relationship: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {});
  StudentGuardian.associate = function(models) {
    // associations can be defined here
  };
  return StudentGuardian;
};