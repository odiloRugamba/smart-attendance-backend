export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        allowNull: true,
        type: DataTypes.STRING
      },
      dob: {
        allowNull: true,
        type: DataTypes.DATE
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING
      },
      lastLogin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      rememberMe: {
        type: DataTypes.STRING,
        allowNull: true
      },
      emailNotification: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {paranoid: true}
  );
  User.associate = function(models) {
    models.User.hasOne(models.School, {foreignKey: { name: "userId" } });
    models.User.hasMany(models.ClassTeacher, {foreignKey: { name: "userId" } });
    models.User.hasMany(models.Staff, {foreignKey: { name: "userId" } });
    models.User.hasMany(models.EducationOfficer, {foreignKey: { name: "userId" } });
  }

  return User;
};
