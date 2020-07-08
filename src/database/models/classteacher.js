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
  
  ClassTeacher.associate = function(models) {
    models.ClassTeacher.belongsTo(models.User, {foreignKey: { name: "userId" } });
    models.ClassTeacher.belongsTo(models.Class, {foreignKey: { name: "classId" } });
  };
  return ClassTeacher;
};