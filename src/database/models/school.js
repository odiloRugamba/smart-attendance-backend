export default (sequelize, DataTypes) => {
  const School = sequelize.define(
    'School',
    {
      schoolName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      schoolPhone: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolLogo: {
        allowNull: true,
        type: DataTypes.STRING
      },
      villageId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      schoolAddress: {
        allowNull: true,
        type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    }, {paranoid: true}
  );
  School.associate = (models) => {
    models.School.belongsTo(models.Village, {foreignKey: { name: "villageId" } });
  };
  School.associate = (models) => {
    models.School.belongsTo(models.User, {foreignKey: { name: "userId" } });
  };
  School.associate = (models) => {
    models.School.belongsToMany(
      models.Student, {
        through: {
          model: models.SchoolStudent
        },
        foreignKey: {
          name: "SchoolId"
        }
    });
  };
  School.associate = (models) => {
    models.School.hasMany(models.Staff, {foreignKey: { name: "schoolId" } });
  };
  School.associate = (models) => {
    models.School.hasMany(models.GateAttendance, {foreignKey: { name: "schoolId" } });
  };
  School.associate = (models) => {
    models.School.hasMany(models.Class, {foreignKey: { name: "schoolId" } });
  };

  return School;
};
