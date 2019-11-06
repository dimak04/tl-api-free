"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "typeOfDeliveries",
      [
        {
          name: "Самовывоз",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "До склада",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("typeOfDeliveries", null, {});
  }
};
