module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Staffs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    schoolId: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    role: {
      type: Sequelize.ENUM(['HEAD','DISCIPLINE','DOS','TEACHER']),
      allowNull: true,
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
  down: (queryInterface) => queryInterface.dropTable('Staffs')
};
