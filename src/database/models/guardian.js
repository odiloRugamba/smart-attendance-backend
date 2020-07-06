'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guardian = sequelize.define('Guardian', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {paranoid: true});
  Guardian.associate = function(models) {
    models.Guardian.belongsToMany(models.Student, {
      through: {
        model: models.StudentGuardian,
        foreignKey: {
          name: "guardianId"
        }
      }
    });
  };
  return Guardian;
};