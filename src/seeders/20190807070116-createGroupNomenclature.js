"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "groupNomenclatures",
      [
        {
          name: "Свинина",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Говядина",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Мясо птиц",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("groupNomenclatures", null, {});
  }
};
