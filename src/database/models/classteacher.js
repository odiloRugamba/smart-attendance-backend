'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassTeacher = sequelize.define('ClassTeacher', {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {paranoid: true});
  // ClassTeacher.associate = function(models) {
  //   models.ClassTeacher.belongsToMany(models.Class, {foreignKey: { name: "classId" } });
  // };
  // ClassTeacher.associate = function(models) {
  //   models.ClassTeacher.belongsToMany(models.User, {foreignKey: { name: "userId" } });
  // };
  return ClassTeacher;
};