"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "typeOfAgreements",
      [
        {
          name: "Поставка",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Хранение",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Подряда",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Оказания услуг",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("typeOfAgreements", null, {});
  }
};
