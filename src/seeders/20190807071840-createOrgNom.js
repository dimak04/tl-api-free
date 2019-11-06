"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orgnoms",
      [
        {
          organizationId: 1,
          nomenclatureId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          organizationId: 1,
          nomenclatureId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orgnoms", null, {});
  }
};
