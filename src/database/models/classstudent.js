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
  }, {paranoid: true});
  // ClassStudent.associate = function(models) {
  //   models.ClassStudent.belongsToMany(models.Class, {foreignKey: { name: "classId" } });
  // };
  // ClassStudent.associate = function(models) {
  //   models.ClassStudent.belongsToMany(models.Student, {foreignKey: { name: "studentId" } });
  // };
  return ClassStudent;
};