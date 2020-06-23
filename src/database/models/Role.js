
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Role', {
    roleName: { type: DataTypes.STRING, allowNull: false },
    roleValue: { type: DataTypes.STRING, allowNull: false },
  }, { freezeTableName: true });
  Roles.associate = () => {
  };
  return Roles;
};
