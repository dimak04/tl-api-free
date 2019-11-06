"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "typeOfOrganizations",
      [
        {

          name: "Поставщик",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Покупатель",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("typeOfOrganizations", null, {});
  }
};
