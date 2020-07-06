'use strict';
module.exports = (sequelize, DataTypes) => {
  const GateAttendance = sequelize.define('GateAttendance', {
    studentId:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    time: {
      allowNull: false,
      type: DataTypes.DATE
    },
    schoolId:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    gate:{
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {paranoid: true});
  GateAttendance.associate = function(models) {
    models.GateAttendance.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
  };
  GateAttendance.associate = function(models) {
    models.GateAttendance.belongsTo(models.Student, {foreignKey: { name: "studentId" } });
  };
  return GateAttendance;
};