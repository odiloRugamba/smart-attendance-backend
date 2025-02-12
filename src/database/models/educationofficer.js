'use strict';
module.exports = (sequelize, DataTypes) => {
  const EducationOfficer = sequelize.define('EducationOfficer', {
    role: {
      allowNull: false,
      type: DataTypes.ENUM(['ADMIN','STAFF'])
    },
    level: {
      allowNull: false,
      type: DataTypes.ENUM(['COUNTRY','PROVINCE','DISTRICT','SECTOR','CELL','VILLAGE'])
    },
    province: {
      allowNull: true,
      type: DataTypes.STRING
    },
    district: {
      allowNull: true,
      type: DataTypes.STRING
    },
    sector: {
      allowNull: true,
      type: DataTypes.STRING
    },
    cell: {
      allowNull: true,
      type: DataTypes.STRING
    },
    village: {
      allowNull: true,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {paranoid: true});
  EducationOfficer.associate = function(models) {
    models.EducationOfficer.belongsTo(models.User, {foreignKey: { name: "userId" } });
  };
  return EducationOfficer;
};