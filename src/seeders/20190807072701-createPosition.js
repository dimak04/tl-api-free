"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "positions",
      [
        {
          name: "Бахгалтер",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Менеджер",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("positions", null, {});
  }
};
