
export default (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      schoolId: {
        allowNull: true,
        type: DataTypes.STRING
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING
      },
      roleName: {
        allowNull: true,
        type: DataTypes.DATE
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING
      },
      profileImage: {
        allowNull: true,
        type: DataTypes.STRING
      },
    }, {}
  );
  Staff.associate = () => {
    // associations can be defined here
  };
  return Staff;
};
