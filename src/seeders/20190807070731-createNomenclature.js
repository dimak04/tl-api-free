"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "nomenclatures",
      [
        {
          name: "Коровняк",
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Молодняк",
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Полутушки",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Четвертинки",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Крыло бройлера",
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Бедро бройлера",
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("nomenclatures", null, {});
  }
};
