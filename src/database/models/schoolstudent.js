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
  }, {paranoid: true});
  // SchoolStudent.associate = function(models) {
  //   models.SchoolStudent.belongsToMany(models.School, {foreignKey: { name: "schoolId" } });
  // };
  // SchoolStudent.associate = function(models) {
  //   models.SchoolStudent.belongsToMany(models.Student, {foreignKey: { name: "studentId" } });
  // };
  return SchoolStudent;
};