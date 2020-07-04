'use strict';
module.exports = (sequelize, DataTypes) => {
  const GateAttendance = sequelize.define('GateAttendance', {
    studentId:{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    time: {
      allowNull: false,
      type: Sequelize.DATE
    },
    classId:{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    gate:{
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {});
  GateAttendance.associate = function(models) {
    // associations can be defined here
  };
  return GateAttendance;
};