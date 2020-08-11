'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leavingTime: {
        type: Sequelize.DATE
      },
      expectedBackTime: {
        type: Sequelize.DATE
      },
      realBackTime: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isBack: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      reason: {
        type: Sequelize.STRING
      },
      issuedBy: {
        type: Sequelize.INTEGER
      },
      markedBackBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      requesterName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      requesterPhone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      requesterRelationship: {
        type: Sequelize.STRING,
        allowNull: true
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      schoolId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Permissions');
  }
};