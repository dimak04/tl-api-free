"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "agreements",
      [
        {
          number: "№10-По/19",
          typeId: 1,
          dateStart: "01/01/2019",
          delay: 10,
          typeOfDeliveryId: 2,
          providerId: 1,
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("agreements", null, {});
  }
};
