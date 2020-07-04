'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentId = sequelize.define('StudentId', {
    studentId:  {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    givenId:  {
      allowNull: false,
      type: DataTypes.STRING
    },
    type:  {
      allowNull: false,
      type: DataTypes.ENUM(['SPECIAL-ID','RFID-ID'])
    }
  }, {});
  StudentId.associate = function(models) {
    // associations can be defined here
  };
  return StudentId;
};