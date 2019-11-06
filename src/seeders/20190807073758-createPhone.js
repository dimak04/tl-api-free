"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "phones",
      [
        {
          number: "11111",
          contactId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          number: "22222",
          contactId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          number: "33333",
          contactId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          number: "44444",
          contactId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          number: "55555",
          contactId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("phones", null, {});
  }
};
