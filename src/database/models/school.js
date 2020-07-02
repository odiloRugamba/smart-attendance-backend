export default (sequelize, DataTypes) => {
  const School = sequelize.define(
    'School',
    {
      schoolName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      headFirstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      headLaststName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      headEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      headPhone: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolProvince: {
        allowNull: true,
        type: DataTypes.DATE
      },
      schoolDistrict: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolSector: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolCell: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolphone: {
        allowNull: true,
        type: DataTypes.DATE
      },
      schoolEmail: {
        allowNull: true,
        type: DataTypes.STRING
      },
      schoolLogo: {
        allowNull: true,
        type: DataTypes.STRING
      },
    }, {}
  );
  School.associate = () => {
    // associations can be defined here
  };
  return School;
};
