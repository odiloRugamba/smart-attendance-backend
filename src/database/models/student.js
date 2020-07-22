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
    }
  }, {paranoid: true});
  Student.associate = function(models) {
    models.Student.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
    models.Student.belongsTo(models.Village, {foreignKey: { name: "villageId" } });

    models.Student.hasMany(models.StudentId, {foreignKey: { name: "studentId" } });
    models.Student.belongsToMany(models.Guardian, {
      through: {
        model: models.StudentGuardian
      },
      foreignKey: {
        name: "studentId"
      }
    });
    models.Student.hasMany(models.SchoolStudent, {foreignKey: { name: "studentId" } });
    models.Student.hasMany(models.GateAttendance, {foreignKey: { name: "studentId" } });
    models.Student.hasMany(models.ClassAttendance, {foreignKey: { name: "studentId" } });
  };

  return Student;
};