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
  }, {});
  Village.associate = function(models) {
    // associations can be defined here
  };
  return Village;
};