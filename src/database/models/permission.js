export default (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
      leavingTime: {
        type: DataTypes.DATE
      },
      expectedBackTime: {
        type: DataTypes.DATE
      },
      realBackTime: {
        type: DataTypes.DATE,
        allowNull: true
      },
      isBack: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      reason: {
        type: DataTypes.STRING
      },
      issuedBy: {
        type: DataTypes.INTEGER
      },
      markedBackBy: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      requesterName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      requesterPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      requesterRelationship: {
        type: DataTypes.STRING,
        allowNull: true
      },
      studentId: {
        type: DataTypes.INTEGER
      },
      schoolId: {
        type: DataTypes.INTEGER
      }
    }, {paranoid: true}
  );
  Permission.associate = (models) => {
    models.Permission.belongsTo(models.Student, {foreignKey: { name: "studentId" } });
    models.Permission.belongsTo(models.School, {foreignKey: { name: "schoolId" } });
  };
  return Permission;
};
