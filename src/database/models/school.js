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
      address: {
        allowNull: true,
        type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    }, {}
  );
  School.associate = () => {
    // associations can be defined here
  };
  return School;
};
