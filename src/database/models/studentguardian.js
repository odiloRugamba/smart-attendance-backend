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
  }, {paranoid: true});
  // StudentGuardian.associate = function(models) {
  //   models.StudentGuardian.belongsToMany(models.Student, {foreignKey: { name: "studentId" } });
  // };
  // StudentGuardian.associate = function(models) {
  //   models.StudentGuardian.belongsToMany(models.Guardian, {foreignKey: { name: "guardianId" } });
  // };
  return StudentGuardian;
};