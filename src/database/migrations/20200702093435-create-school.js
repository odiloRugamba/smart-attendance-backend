module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Schools', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    schoolName: {
      allowNull: true,
      type: Sequelize.STRING
    },
    schoolEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    schoolPhone: {
      allowNull: true,
      type: Sequelize.STRING
    },
    schoolLogo: {
      allowNull: true,
      type: Sequelize.STRING
    },
    villageId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    schoolAddress: {
      allowNull: true,
      type: Sequelize.STRING
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
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
