'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    combination: {
      allowNull: true,
      type: DataTypes.STRING
    },
    label: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {paranoid: true});
  Class.associate = function(models) {
    models.Class.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
  };
  Class.associate = function(models) {
    models.Class.hasMany(models.ClassAttendance, {foreignKey: { name: "classId" } });
  };
  Class.associate = function(models) {
    models.Class.hasMany(models.ClassTeacher, {foreignKey: { name: "classId" } });
  };
  Class.associate = function(models) {
    models.Class.hasMany(models.ClassStudent, {foreignKey: { name: "classId" } });
  };
  return Class;
};