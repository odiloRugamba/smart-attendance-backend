
export default (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      schoolId: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM(['HEAD','DISCIPLINE','DOS','TEACHER']),
        allowNull: true,
      },
    }, {}
  );
  Staff.associate = () => {
    // associations can be defined here
  };
  return Staff;
};
