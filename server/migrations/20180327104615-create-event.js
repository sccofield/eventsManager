

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    date: {
      type: Sequelize.DATE
    },
    duration: {
      type: Sequelize.NUMBER
    },
    status: {
      type: Sequelize.STRING
    },
    centerId: {
      type: Sequelize.INTEGER
    },
    centerName: {
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
  down: queryInterface => queryInterface.dropTable('Events')
};
