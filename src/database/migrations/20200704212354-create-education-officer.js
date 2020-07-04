'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EducationOfficers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM(['ADMIN','STAFF'])
      },
      level: {
        allowNull: false,
        type: Sequelize.ENUM(['COUNTRY','PROVINCE','DISTRICT','SECTOR','CELL','VILLAGE'])
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING
      },
      district: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sector: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cell: {
        allowNull: true,
        type: Sequelize.STRING
      },
      village: {
        allowNull: true,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('EducationOfficers');
  }
};