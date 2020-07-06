'use strict';
module.exports = (sequelize, DataTypes) => {
  const Village = sequelize.define('Village', {
    province:{
        allowNull: false,
        type: DataTypes.STRING
    },
    district:{
        allowNull: false,
        type: DataTypes.STRING
    },
    sector:{
        allowNull: false,
        type: DataTypes.STRING
    },
    cell:{
        allowNull: false,
        type: DataTypes.STRING
    },
    village:{
        allowNull: false,
        type: DataTypes.STRING
    }
  }, {paranoid: true});
  Village.associate = function(models) {
    models.Village.hasMany(models.School, {foreignKey: { name: "villageId" } });
  };
  Village.associate = function(models) {
    models.Village.hasMany(models.Student, {foreignKey: { name: "villageId" } });
  };
  return Village;
};