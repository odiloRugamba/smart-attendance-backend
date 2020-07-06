'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassAttendance = sequelize.define('ClassAttendance', {
    studentId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    classId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    time: {
      allowNull: false,
      type: DataTypes.DATE
    },
    staffId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {paranoid: true});
  ClassAttendance.associate = function(models) {
    models.ClassAttendance.belongsTo(models.Class, {foreignKey: { name: "classId" } });
  };
  ClassAttendance.associate = function(models) {
    models.ClassAttendance.belongsTo(models.Student, {foreignKey: { name: "studentId" } });
  };
  ClassAttendance.associate = function(models) {
    models.ClassAttendance.belongsTo(models.Staff, {foreignKey: { name: "staffId" } });
  };
  return ClassAttendance;
};