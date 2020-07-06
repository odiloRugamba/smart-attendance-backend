
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
    }, {paranoid: true}
  );
  Staff.associate = (models) => {
    models.Staff.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
  };
  Staff.associate = (models) => {
    models.Staff.belongsTo(models.User, {foreignKey: { name: "userId" } });
  };
  return Staff;
};
