'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Villages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province:{
          allowNull: false,
          type: Sequelize.STRING
      },
      district:{
          allowNull: false,
          type: Sequelize.STRING
      },
      sector:{
          allowNull: false,
          type: Sequelize.STRING
      },
      cell:{
          allowNull: false,
          type: Sequelize.STRING
      },
      village:{
          allowNull: false,
          type: Sequelize.STRING
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
    return queryInterface.dropTable('Villages');
  }
};