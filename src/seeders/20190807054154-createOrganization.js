"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "organizations",
      [
        {
          name: "Мясо опт",
          fullname: "ООО Мясо опт",
          legalAddress: "г. Барнаул, ул. Матросова, 9д",
          actualAddress: "г. Барнаул, ул. Матросова, 9д",
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Вкусная жизнь",
          fullname: "ООО Вкусная жизнь",
          legalAddress: "г. Барнаул, ул. Матросова, 9д",
          actualAddress: "г. Барнаул, ул. Матросова, 9д",
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("organizations", null, {});
  }
};
