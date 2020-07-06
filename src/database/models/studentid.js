'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentId = sequelize.define('StudentId', {
    studentId:  {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    givenId:  {
      allowNull: false,
      type: DataTypes.STRING
    },
    type:  {
      allowNull: false,
      type: DataTypes.ENUM(['SPECIAL-ID','RFID-ID'])
    }
  }, {paranoid: true});
  StudentId.associate = function(models) { 
    models.StudentId.belongsTo(models.Student, {foreignKey: { name: "studentId" } });
  };
  return StudentId;
};