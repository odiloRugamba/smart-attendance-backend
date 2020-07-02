module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Schools', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    schoolName: {
      type: Sequelize.STRING
    },
    headFirstName: {
      type: Sequelize.STRING
    },
    headLaststName: {
      type: Sequelize.STRING
    },
    headEmail: {
      type: Sequelize.STRING
    },
    headPhone: {
      type: Sequelize.STRING
    },
    schoolProvince: {
      type: Sequelize.STRING
    },
    schoolDistrict: {
      type: Sequelize.STRING
    },
    schoolSector: {
      type: Sequelize.STRING
    },
    schoolCell: {
      type: Sequelize.STRING
    },
    schoolphone: {
      type: Sequelize.STRING
    },
    schoolEmail: {
      type: Sequelize.STRING
    },
    schoolLogo: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Schools')
};
