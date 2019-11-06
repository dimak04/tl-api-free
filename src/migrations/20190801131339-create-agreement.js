'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agreements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "typeOfAgreements",
          key: "id"
        }
      },
      dateStart: {
        type: Sequelize.STRING
      },
      dateEnd: {
        type: Sequelize.STRING
      },
      delay: {
        type: Sequelize.INTEGER
      },
      typeOfDeliveryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "typeOfDeliveries",
          key: "id"
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "organizations",
          key: "id"
        }
      },
      customerId: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('agreements');
  }
};