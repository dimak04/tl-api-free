"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "contacts",
      [
        {
          fio: "Пупкин Петр Петрович",
          positionId: 1,
          email: "post@po.po",
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fio: "Иванов Иван Иванович",
          positionId: 2,
          email: "iii@po.po",
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fio: "Алексеев Алексей Алексеевич",
          positionId: 2,
          email: "aaa@po.po",
          organizationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("contacts", null, {});
  }
};
