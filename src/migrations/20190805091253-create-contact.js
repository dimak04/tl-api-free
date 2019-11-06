'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fio: {
        type: Sequelize.STRING
      },
      positionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "positions",
          key: "id"
        }
      },
      email: {
        type: Sequelize.STRING
      },
      organizationId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "organizations",
          key: "id"
        }
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
    return queryInterface.dropTable('contacts');
  }
};