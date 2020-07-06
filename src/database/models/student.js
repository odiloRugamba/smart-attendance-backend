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
  }, {paranoid: true});
  Student.associate = function(models) {
    models.Student.belongsTo(models.Class, {foreignKey: { name: "classId" } });
  };
  Student.associate = function(models) {
    models.Student.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
  };
  Student.associate = function(models) {
    models.Student.belongsTo(models.Village, {foreignKey: { name: "villageId" } });
  };
  Student.associate = function(models) {
    models.Student.hasMany(models.StudentId, {foreignKey: { name: "studentId" } });
  };
  Student.associate = function(models) {
    models.Student.belongsToMany(models.Guardian, {
      through: {
        model: models.StudentGuardian,
        foreignKey: {
          name: "studentId"
        }
      }
    });
  };
  Student.associate = function(models) {
    models.Student.hasMany(models.SchoolStudent, {foreignKey: { name: "studentId" } });
  };
  Student.associate = function(models) {
    models.Student.hasMany(models.GateAttendance, {foreignKey: { name: "studentId" } });
  };
  Student.associate = function(models) {
    models.Student.hasMany(models.ClassAttendance, {foreignKey: { name: "studentId" } });
  };

  return Student;
};