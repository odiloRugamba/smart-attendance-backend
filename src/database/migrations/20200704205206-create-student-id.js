'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentIds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId:  {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      givenId:  {
        allowNull: false,
        type: Sequelize.STRING
      },
      type:  {
        allowNull: false,
        type: Sequelize.ENUM(['SPECIAL-ID','RFID-ID'])
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentIds');
  }
};